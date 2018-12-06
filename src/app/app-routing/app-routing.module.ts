import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { GestionEtablissementComponent } from '../gestion-etablissement/gestion-etablissement.component';
import { GestionEntrepriseComponent } from '../gestion-entreprise/gestion-entreprise.component';
import { GestionCompteComponent } from '../gestion-compte/gestion-compte.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'gestionEtablissement', component: GestionEtablissementComponent },
  { path: 'gestionEntreprise', component: GestionEntrepriseComponent },
  { path: 'gestionCompte', component: GestionCompteComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})

export class AppRoutingModule { }

// Liste des composants soumis au routing
export const routingComponents = [
  DashboardComponent,
  GestionEtablissementComponent,
  GestionEntrepriseComponent,
  GestionCompteComponent
]
