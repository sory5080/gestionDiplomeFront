import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  verif = true;

  constructor() { }

  getVerif() {
    return this.verif;
  }

  setVerif(v) {
    this.verif = v;
  }
}
