import { Component, OnInit } from '@angular/core';
import { Etablissement } from '../classes/etablissement';
import { EtablissementService } from '../services/etablissement.service';

@Component({
  selector: 'app-gestion-etablissement',
  templateUrl: './gestion-etablissement.component.html',
  styleUrls: ['./gestion-etablissement.component.css']
})
export class GestionEtablissementComponent implements OnInit {

  listEtablissements: any;
  pageCourante: number = 0;
  size: number = 5;
  pages: Array<number>;

  constructor(private etabService: EtablissementService) { }

  ngOnInit() {
    this.doSearch();
  }

  doSearch() {
    this.etabService.getAllEtablissements(this.pageCourante, this.size)
      .subscribe(data => {
        this.listEtablissements = data;
        this.pages = new Array(data.page.totalPages);
        console.log(data);
      },
        err => {
          console.log(err);
          this.listEtablissements = null;
        });
  }

  gotoPage(id: number) {
    this.pageCourante = id;
    this.doSearch();
  }

}
