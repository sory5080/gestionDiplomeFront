import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../classes/entreprise';
import { EntrepriseService } from '../services/entreprise.service';

@Component({
  selector: 'app-gestion-entreprise',
  templateUrl: './gestion-entreprise.component.html',
  styleUrls: ['./gestion-entreprise.component.css']
})
export class GestionEntrepriseComponent implements OnInit {

  listEntreprises: any;
  pageCourante: number = 0;
  size: number = 5;
  pages: Array<number>;

  constructor(private entrepriseService: EntrepriseService) { }

  ngOnInit() {
    this.doSearch();
  }

  doSearch() {
    this.entrepriseService.getAllEntreprises(this.pageCourante, this.size)
      .subscribe(data => {
        this.listEntreprises = data;
        this.pages = new Array(data.page.totalPages);
      },
        err => {
          console.log(err);
          this.listEntreprises = null;
        }); 
  }

  gotoPage(id: number) {
    this.pageCourante = id;
    this.doSearch();
  }

}
