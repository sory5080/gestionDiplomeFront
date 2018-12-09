import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { BoxInfosComponent } from './box-infos/box-infos.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardPlatefromeComponent } from './dashboard/dashboard-platefrome/dashboard-platefrome.component';
import { DashboardEtablissementComponent } from './dashboard/dashboard-etablissement/dashboard-etablissement.component';
import { DashboardEntrepriseComponent } from './dashboard/dashboard-entreprise/dashboard-entreprise.component';
import { AppRoutingModule, routingComponents } from './app-routing/app-routing.module';
import { EtablissementService } from './services/etablissement.service';
import { EntrepriseService } from './services/entreprise.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainSidebarComponent,
    PageHeaderComponent,
    BoxInfosComponent,
    MainContentComponent,
    FooterComponent,
    DashboardPlatefromeComponent,
    DashboardEtablissementComponent,
    DashboardEntrepriseComponent,
    routingComponents    
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    RouterModule,
    FormsModule,
    HttpModule
  ],
  providers: [ 
    EtablissementService,
    EntrepriseService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
