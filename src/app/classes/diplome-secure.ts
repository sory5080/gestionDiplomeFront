import { Niveau } from "./niveau";
import { Observable } from "rxjs";

export class DiplomeSecure {
    //id_diplome: number = null;
    empreinte: string = "";
    filiere: string = "";
    promotion: number = 0;
    codeQR: string = "";
    nomEtudiant: string = "";
    prenomEtudiant: string = "";
    photoEtudiant: string = "";
    niveau: string = "";
    _links: any = null;
}
