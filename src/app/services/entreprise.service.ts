import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor( private httpReq: Http) { }

  // Methode permettant de récupérer la liste des établisssments
  // dépuis le Back-end.
  getAllEntreprises(page: number, size: number) {
    return this.httpReq
      .get("http://localhost:82/entreprises?page="
        + page + "&size=" + size)
      .pipe(
        map(
          rep => rep.json()
        )
      );
  }

}
