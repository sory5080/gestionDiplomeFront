import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { InfosListDiplomes } from '../classes/infos-list-diplomes';
import { DiplomeAuth } from '../classes/diplome-auth';

@Injectable({
  providedIn: 'root'
})
export class DiplomesService {

  url = "";

  constructor(private httpReq: Http) { }

  // Methode permettant de récupérer la liste des diplômes sécurisés
  // dépuis le Back-end.
  getAllDiplomes(page: number, size: number) {
    return this.httpReq
      .get("http://localhost:9999/diplome-service/diplomeSecures?page="
        + page + "&size=" + size + "&sort=idDiplome,desc")
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

  secureDiplomes(infos: InfosListDiplomes) {
    let url = "http://localhost:9999/diplome-service/secureListeDiplomes";
    return this.httpReq.post(url, infos)
    .pipe(
      map(rep => rep.json())
    );
  }

  authentifierDiplome(dipAuth: DiplomeAuth) {
    let url = "http://localhost:9999/diplome-service/authentifierDiplome";
    return this.httpReq.post(url, dipAuth)
      .pipe(
        map(rep => rep.json())
      );
  }
}
