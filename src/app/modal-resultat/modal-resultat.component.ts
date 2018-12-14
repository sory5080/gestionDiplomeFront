import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-resultat',
  template: `
  <div>
    <div class="modal-header bg-success">
      <h4 class="modal-title" id="modal-basic-title">Resultat de l'opération de sécurisation</h4>
      <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <!-- Modal body -->
    <div class="modal-body">
      <p>Les diplômes correspondants aux informations ci-dessous ont été sécurisés avec succès !</p>
      <hr>
      <div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <span class="badge bd1 text-left">Filière: </span>
            <span class="bd2 badge badge-info">GLAR</span>
          </li>
          <li class="list-group-item">
            <span class="badge bd1 text-left">Niveau: </span>
            <span class="bd2 badge badge-info">MASTER</span>
          </li>
          <li class="list-group-item">
            <span class="badge bd1 text-left">Promotion: </span>
            <span class="bd2 badge badge-info">2018</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="modal-footer text-center">
      <button class="btn btn-success" (click)="modal.dismiss('OK click')">OK</button>
    </div>
  </div>
  `,
  styles: []
})
export class ModalResultatComponent implements OnInit {

  constructor(public modal: NgbActiveModal) { }

  ngOnInit() {
  }

}
