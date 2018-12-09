import { Component, OnInit } from '@angular/core';
import { DiplomesService } from 'src/app/services/diplomes.service';
import { DiplomeSecure } from 'src/app/classes/diplome-secure';
import { deepStrictEqual } from 'assert';

@Component({
  selector: 'app-dashboard-etablissement',
  templateUrl: './dashboard-etablissement.component.html',
  styleUrls: ['./dashboard-etablissement.component.css']
})
export class DashboardEtablissementComponent implements OnInit {

  listDiplomes: DiplomeSecure[] = [];
  pageCourante: number = 0;
  size: number = 5;
  pages: Array<number>;
  nbreDip: number = 0;
  ds = new DiplomeSecure();

  constructor(private diplomeService: DiplomesService) { }

  ngOnInit() {
    // Initialisation de la liste des diplômes
    this.doSearch();
  }

  //Methode permettant de récupérer les niveaux des diplômes
  private recupNiveaux() {
    //On parcour la liste des diplômes
    this.listDiplomes.forEach(dip => {   
      // On envoi une requete http au back pour réccupérer le
      // niveau du diplome en cour.   
      this.diplomeService.getNiveau(dip._links.niveau.href)
        .subscribe(data => {
          // On affecte le niveau recupérer à l'attribut du diplome
          dip.niveau = data.lib_niveau;
        });
    });
    
  }

  private doSearch() {
    this.diplomeService.getAllDiplomes(this.pageCourante, this.size)
      .subscribe(data => {
        this.listDiplomes = data._embedded.diplomeSecures;
        this.recupNiveaux();
        this.pages = new Array(data.page.totalPages);
        this.nbreDip = data.page.totalElements;
      },
        err => {
          console.log(err);
          this.listDiplomes = null;
        });
  }

  gotoPage(id: number) {
    this.pageCourante = id;
    this.doSearch();
  }

}
