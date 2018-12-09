import { Component, OnInit } from '@angular/core';
import { EtablissementService } from 'src/app/services/etablissement.service';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { DiplomesService } from 'src/app/services/diplomes.service';

@Component({
  selector: 'app-dashboard-platefrome',
  templateUrl: './dashboard-platefrome.component.html',
  styleUrls: ['./dashboard-platefrome.component.css']
})
export class DashboardPlatefromeComponent implements OnInit {

  listEtablissements: any;
  listEntreprises: any;
  pageCourante: number = 0;
  size: number = 5;
  pages: Array<number>;
  nbreEtrp: number = 0;
  nbreEtab: number = 0;
  nbreDip: number = 0;

  constructor(
    private etabService: EtablissementService,
    private entrepriseService: EntrepriseService,
    private diplomeService: DiplomesService) { }

  ngOnInit() {
    // Initialisation de la liste des établissements
    this.etabService.getAllEtablissements(this.pageCourante, this.size)
      .subscribe(data => {
        this.listEtablissements = data;
        this.pages = new Array(data.page.totalPages);
        this.nbreEtab = data.page.totalElements;
      },
        err => {
          console.log(err);
          this.listEtablissements = null;
        });
    
    // Initialisation de la liste des entreprises
    this.entrepriseService.getAllEntreprises(this.pageCourante, this.size)
      .subscribe(data => {
        this.listEntreprises = data;
        this.pages = new Array(data.page.totalPages);
        this.nbreEtrp = data.page.totalElements;
      },
        err => {
          console.log(err);
          this.listEntreprises = null;
        });

    // Réccupération du nombre de diplômes
    this.diplomeService.getAllDiplomes(this.pageCourante, this.size)
      .subscribe(data => {
        this.nbreDip = data.page.totalElements;
      },
        err => {
          console.log(err);
        });
  }

}
