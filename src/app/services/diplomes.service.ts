import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DiplomesService {

  constructor(private httpReq: Http) { }

  // Methode permettant de récupérer la liste des diplômes sécurisés
  // dépuis le Back-end.
  getAllDiplomes(page: number, size: number) {
    return this.httpReq
      .get("http://localhost:82/diplomeSecures?page="
        + page + "&size=" + size)
      .pipe
      (
        map(
          rep => rep.json()
        )
      );
  }
  
  // Methode chargé de récupérer le niveau d'un diplomes
  getNiveau(url: string) {
    return this.httpReq.get(url)
    .pipe(
      map(rep => rep.json())
    );
  }
}
