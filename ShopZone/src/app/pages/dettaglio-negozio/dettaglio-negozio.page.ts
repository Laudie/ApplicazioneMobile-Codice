import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Negozio} from '../../model/negozio.model';
import {NegozioService} from '../../services/negozio.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {Notizia} from '../../model/notizia.model';
import {ModalController} from '@ionic/angular';
import {NotiziaService} from '../../services/notizia.service';
import {Utente} from '../../model/utente.model';
import {UtenteService} from '../../services/utente.service';
@Component({
    selector: 'app-dettaglio-negozio',
    templateUrl: './dettaglio-negozio.page.html',
    styleUrls: ['./dettaglio-negozio.page.scss'],
})
export class DettaglioNegozioPage implements OnInit {
    private negozio$: Observable<Negozio>;
    private utente$: BehaviorSubject<Utente>;
    private idNegozio: number;
    private notizie$: Observable<Notizia[]>;
    private vistaGriglia: boolean;
    constructor(private modalController: ModalController,
                private negozioService: NegozioService,
                private utenteService: UtenteService,
                private notiziaService: NotiziaService,
                private route: ActivatedRoute) { }

    /*async openModalModifica() {
       const myModal = await this.modalController.create({
        component: ModificaPostModalPagePage
       });
       await myModal.present();
    }*/
    /*
      async presentModal({
        const modal = await this.modalController.create({
          component: ModificaPostModalPagePage,
          componentProps:{
            value:123
          }
        });
        return await modal.present();
      }
    */
    ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.vistaGriglia = false;
            this.idNegozio = parseInt(params.get('id'), 0);
            this.negozio$ = this.negozioService.findById(this.idNegozio);
            this.listaNotizie();
            this.utente$ = this.utenteService.getUtente();
        });

    }
    listaNotizie() {
        this.notizie$ = this.notiziaService.listaNotizie(this.idNegozio);
    }
    segmentChanged($event: CustomEvent<any>) {
        this.vistaGriglia = ! this.vistaGriglia ;
    }
}
