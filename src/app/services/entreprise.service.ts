import { Injectable } from '@angular/core';
import { Entreprise } from '../classes/entreprise';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  listEntreprises: Entreprise[] = [
    {
      id: 1,
      nom: "Ecole Sup de Management et de Tech",
      domaine: "Informatique",
      email: "contact@estm.sn",
      adresse: "En face UCAD"
    },
    {
      id: 2,
      nom: "Ecole Sup de Management et de Tech",
      domaine: "Informatique",
      email: "contact@estm.sn",
      adresse: "En face UCAD"
    },
    {
      id: 3,
      nom: "Ecole Sup de Management et de Tech",
      domaine: "Informatique",
      email: "contact@estm.sn",
      adresse: "En face UCAD"
    },  ];

  constructor() { }

  getEntreprises(): Entreprise[] {
    return this.listEntreprises;
  }
}
