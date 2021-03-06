import { Injectable } from '@angular/core';
import { Etablissement } from '../classes/etablissement';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EtablissementService {

  constructor(private httpReq: Http) { }

  // Methode permettant de récupérer la liste des établisssments
  // dépuis le Back-end.
  getAllEtablissements(page: number, size: number) {
    return this.httpReq
      .get("http://localhost:82/etablissements?page="
        + page + "&size=" + size)
      .pipe(
        map(
          rep => rep.json()
        )
      );
  }
}
