import { Injectable } from '@angular/core';
import { Etablissement } from '../classes/etablissement';

@Injectable({
  providedIn: 'root'
})
export class EtablissementService {

  listEtablissements: Etablissement[] = [
    {
      id: 1, 
      nom: "Ecole Sup de Management et de Tech", 
      sigle: "ESTM", 
      specialite: "Informatique",
      email: "contact@estm.sn",
      adresse: "En face UCAD"
    },
    {
      id: 2,
      nom: "Ecole Sup de Management et de Tech",
      sigle: "ESTM",
      specialite: "Informatique",
      email: "contact@estm.sn",
      adresse: "En face UCAD"
    },
    {
      id: 3,
      nom: "Ecole Sup de Management et de Tech",
      sigle: "ESTM",
      specialite: "Informatique",
      email: "contact@estm.sn",
      adresse: "En face UCAD"
    }
  ];

  constructor() { }

  // Methode permettant de récupérer la liste des établisssments
  getEtablissements(): Etablissement[] {
    return this.listEtablissements;
  }
}
