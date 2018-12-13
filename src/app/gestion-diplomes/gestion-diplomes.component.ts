import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DiplomeSecure } from '../classes/diplome-secure';
import { DiplomesService } from '../services/diplomes.service';
import { InfosListDiplomes } from '../classes/infos-list-diplomes';
import { ActivatedRoute } from '@angular/router';
import { DiplomeNonSecure } from '../classes/diplome-non-secure';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-gestion-diplomes',
  templateUrl: './gestion-diplomes.component.html',
  styleUrls: ['./gestion-diplomes.component.css']
})
export class GestionDiplomesComponent implements OnInit {

  afficherForms: string = "";

  filieres = ["GLAR", "RxT", "Management", "Securite", "Monetique"];
  niveaux = ["MASTER", "LICENCE"];
  promotions = ["2015", "2016", "2017", "2018", "2019", "2020" ];

  infosListDiplomes = new InfosListDiplomes();
  dipNonSecure = new DiplomeNonSecure();

  listDiplomes: DiplomeSecure[] = [];
  pageCourante: number = 0;
  size: number = 3;
  pages: Array<number>;
  nbreDip: number = 0;

  timerSubscription: any;
  postsSubscription: any;

  constructor(
    private diplomeService: DiplomesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //On réccupère le paramètre
    this.route.queryParams.subscribe(
      params => {
        this.afficherForms = params['q'];
      });
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
    this.postsSubscription = this.diplomeService.getAllDiplomes(this.pageCourante, this.size)
      .subscribe(data => {
        this.listDiplomes = data._embedded.diplomeSecures;
        //console.log(this.listDiplomes);
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

  secureListeDiplomes() {
    this.postsSubscription = this.diplomeService.secureDiplomes(this.infosListDiplomes)
      .subscribe(data => {
        console.log(data);  
        if(data) {
          this.subscribeToData();
        }
        else {
          //$("#myModal").modal();
        }
        //this.doSearch();   
      },
        erreur => {
          console.log(erreur);
        });
  }
  private subscribeToData(): void {
    this.timerSubscription = timer(100).subscribe(() => this.doSearch());
  }

  public ngOnDestroy(): void {
    if (this.postsSubscription) {
      this.postsSubscription.unsubscribe();
    }
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

}
