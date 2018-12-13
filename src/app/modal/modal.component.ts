import { Component, OnInit } from '@angular/core';
import { GestionDiplomesComponent } from '../gestion-diplomes/gestion-diplomes.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  
  constructor(private gestionDiplome: GestionDiplomesComponent) { }

  ngOnInit() {
  }

  secureListeDiplomes() {
    this.gestionDiplome.secureListeDiplomes();
  }

}
