import { Component, OnInit } from '@angular/core';
import { EtablissementService } from 'src/app/services/etablissement.service';
import { Etablissement } from 'src/app/classes/etablissement';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { Entreprise } from 'src/app/classes/entreprise';

@Component({
  selector: 'app-dashboard-platefrome',
  templateUrl: './dashboard-platefrome.component.html',
  styleUrls: ['./dashboard-platefrome.component.css']
})
export class DashboardPlatefromeComponent implements OnInit {

  listEtablissements: Etablissement[] = [];
  listEntreprises: Entreprise[] = [];

  constructor(
    private etabService: EtablissementService,
    private entrepriseService: EntrepriseService) { }

  ngOnInit() {
    this.listEtablissements = this.etabService.getEtablissements();
    this.listEntreprises = this.entrepriseService.getEntreprises();
  }

}
