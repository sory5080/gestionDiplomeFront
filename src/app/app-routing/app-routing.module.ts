import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { GestionEtablissementComponent } from '../gestion-etablissement/gestion-etablissement.component';
import { GestionEntrepriseComponent } from '../gestion-entreprise/gestion-entreprise.component';
import { GestionCompteComponent } from '../gestion-compte/gestion-compte.component';
import { GestionDiplomesComponent } from '../gestion-diplomes/gestion-diplomes.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AuthDiplomeComponent } from '../auth-diplome/auth-diplome.component';
import { ListeDiplomesComponent } from '../liste-diplomes/liste-diplomes.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'gestionEtablissement', component: GestionEtablissementComponent },
  { path: 'gestionEntreprise', component: GestionEntrepriseComponent },
  { path: 'gestionCompte', component: GestionCompteComponent },
  { path: 'secureDiplomes', component: GestionDiplomesComponent },
  { path: 'authDiplome', component: AuthDiplomeComponent },
  { path: 'listeDiplomes', component: ListeDiplomesComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: "**", component: PageNotFoundComponent },
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
  GestionCompteComponent,
  GestionDiplomesComponent,
  PageNotFoundComponent,
  ListeDiplomesComponent,
  AuthDiplomeComponent
]
