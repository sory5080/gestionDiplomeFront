import { Component, OnInit } from '@angular/core';
import { DiplomeAuth } from '../classes/diplome-auth';
import { DiplomesService } from '../services/diplomes.service';
import { DiplomeSecure } from '../classes/diplome-secure';

@Component({
  selector: 'app-auth-diplome',
  templateUrl: './auth-diplome.component.html',
  styleUrls: ['./auth-diplome.component.css']
})
export class AuthDiplomeComponent implements OnInit {

  resAuth: any;
  resultat: string = "EN ATTENTE";

  dipAuth = new DiplomeAuth();
  dipSecure = new DiplomeSecure();

  constructor(private dipService: DiplomesService) { }

  ngOnInit() {
  }

  authentifierDiplome() {
    this.dipService.authentifierDiplome(this.dipAuth)
      .subscribe(data => {        
        if(data.empreinte == null) {
          this.resAuth = false;
          this.resultat = "FAUX DIPLOME";         
          console.log(data);
        } else {
          this.dipSecure = data;
          this.resAuth = true;
          this.resultat = "DIPLOME AUTHENTIQUE"; 
          console.log("OK");
        }
      });
  }

}
