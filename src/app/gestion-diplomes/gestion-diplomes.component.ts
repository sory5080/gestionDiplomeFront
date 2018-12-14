import { Component, OnInit } from '@angular/core';
import { DiplomeSecure } from '../classes/diplome-secure';
import { DiplomesService } from '../services/diplomes.service';
import { InfosListDiplomes } from '../classes/infos-list-diplomes';
import { ActivatedRoute } from '@angular/router';
import { DiplomeNonSecure } from '../classes/diplome-non-secure';
import { timer } from 'rxjs';
import { ModalComponent } from '../modal/modal.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

//Liste des modals
const MODALS = {
  confirmSecure: ModalComponent
};

@Component({
  selector: 'app-gestion-diplomes',
  templateUrl: './gestion-diplomes.component.html',
  styleUrls: ['./gestion-diplomes.component.css']
})
export class GestionDiplomesComponent implements OnInit {

  afficherForms: string = "";

  filieres = ["GLAR", "RxT", "Management", "Securite", "Monetique"];
  niveaux = ["MASTER", "LICENCE"];
  promotions = ["2015", "2016", "2017", "2018", "2019", "2020" ];

  infosListDiplomes = new InfosListDiplomes();
  dipNonSecure = new DiplomeNonSecure();

  listDiplomes: DiplomeSecure[] = [];
  pageCourante: number = 0;
  size: number = 3;
  pages: Array<number>;
  nbreDip: number = 0;

  timerSubscription: any;
  postsSubscription: any;

  closeResult: string;

  constructor(
    private diplomeService: DiplomesService,
    private route: ActivatedRoute,
    private modalService: NgbModal) { }

  ngOnInit() {
    //On réccupère le paramètre
    this.route.queryParams.subscribe(
      params => {
        this.afficherForms = params['q'];
      });
    // Initialisation de la liste des diplômes
    this.doSearch();
  }

  open(nom: string) {
    this.modalService.open(MODALS[nom], { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log(this.closeResult);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log(this.closeResult);
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  //Methode permettant de récupérer les niveaux des diplômes
  private recupNiveaux() {
    //On parcour la liste des diplômes
    this.listDiplomes.forEach(dip => {
      // On envoi une requete http au back pour réccupérer le
      // niveau du diplome en cour.   
      this.diplomeService.getNiveau(dip._links.niveau.href)
        .subscribe(data => {
          // On affecte le niveau recupérer à l'attribut du diplome
          dip.niveau = data.lib_niveau;
        });
    });

  }

  private doSearch() {
    this.postsSubscription = this.diplomeService.getAllDiplomes(this.pageCourante, this.size)
      .subscribe(data => {
        this.listDiplomes = data._embedded.diplomeSecures;
        //console.log(this.listDiplomes);
        this.recupNiveaux();
        this.pages = new Array(data.page.totalPages);
        this.nbreDip = data.page.totalElements;
      },
        err => {
          console.log(err);
          this.listDiplomes = null;
        });
  }

  gotoPage(id: number) {
    this.pageCourante = id;
    this.doSearch();
  }

  secureListeDiplomes() {
    this.postsSubscription = this.diplomeService.secureDiplomes(this.infosListDiplomes)
      .subscribe(data => {
        console.log(data);  
        if(data) {
          this.subscribeToData();
        }
        else {
          //$("#myModal").modal();
        }
        //this.doSearch();   
      },
        erreur => {
          console.log(erreur);
        });
  }
  private subscribeToData(): void {
    this.timerSubscription = timer(100).subscribe(() => this.doSearch());
  }

  public ngOnDestroy(): void {
    if (this.postsSubscription) {
      this.postsSubscription.unsubscribe();
    }
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

}
