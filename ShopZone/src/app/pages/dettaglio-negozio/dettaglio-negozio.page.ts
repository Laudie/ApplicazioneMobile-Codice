import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Negozio} from '../../model/negozio.model';
import {NegozioService} from '../../services/negozio.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {Notizia} from '../../model/notizia.model';
import {ModalController, NavController} from '@ionic/angular';
import {NotiziaService} from '../../services/notizia.service';
import {Utente} from '../../model/utente.model';
import {UtenteService} from '../../services/utente.service';
import {AggiungiNegozioPage} from '../aggiungi-negozio/aggiungi-negozio.page';
import {OverlayEventDetail} from '@ionic/core';

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
                private route: ActivatedRoute,
                private navCtrl: NavController) {
    }


    async modificaNegozio(negozio: Negozio) {
        const modal = await this.modalController.create({
            component: AggiungiNegozioPage,
            componentProps: {appParam: negozio}
        });
        modal.onDidDismiss().then((detail: OverlayEventDetail) => {
            if (detail !== null && detail.data !== undefined) {
                this.negozioService.modificaNegozio(detail.data, negozio.id).subscribe(() => {
                    this.ngOnInit();
                });
            } else {
                console.log('cancel button pressed');
            }
        });
        return await modal.present();
    }

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

    cambioVista() {
        this.vistaGriglia = !this.vistaGriglia;
    }

    tornaIndietro() {
        this.navCtrl.back();
    }

    preferito(negozio: Negozio) {
        if (this.utenteService.getAuthToken() != null) {
            if (negozio.preferito) {
                this.negozioService.rimuoviPreferito(negozio.id).subscribe(() => {
                    negozio.preferito = false;
                    negozio.preferenze -= 1;
                });
            } else {
                this.negozioService.aggiungiPreferito(negozio.id).subscribe(() => {
                    negozio.preferito = true;
                    negozio.preferenze += 1;
                });
            }
        } else {
            this.navCtrl.navigateRoot('login');
        }
    }
}
