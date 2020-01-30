import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Notizia} from '../../model/notizia.model';
import {NotiziaService} from '../../services/notizia.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {UtenteService} from '../../services/utente.service';
import {Utente} from '../../model/utente.model';
import {OverlayEventDetail} from '@ionic/core';
import {ModalController, NavController} from '@ionic/angular';
import {NotiziaModalPage} from '../notizia-modal/notizia-modal.page';


@Component({
    selector: 'app-notizia-dettaglio',
    templateUrl: './notizia-dettaglio.page.html',
    styleUrls: ['./notizia-dettaglio.page.scss'],
})
export class NotiziaDettaglioPage implements OnInit {
    notizia$: Observable<Notizia>;
    utente$: BehaviorSubject<Utente>;

    constructor(private route: ActivatedRoute,
                private notiziaService: NotiziaService,
                private modalController: ModalController,
                private utenteService: UtenteService,
                private navController: NavController,
    ) {
    }
    ngOnInit() {
        this.utente$ = this.utenteService.getUtente();
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.notizia$ = this.notiziaService.findById(parseInt(params.get('id'), 0));
        });
    }

    miPiace(notizia: Notizia) {
        if (this.utenteService.getAuthToken() != null) {
            if (notizia.piace) {
                this.notiziaService.rimuoviPiace(notizia.id).subscribe(() => {
                    notizia.piace = false;
                    notizia.numeroPiace -= 1;
                });
            } else {
                this.notiziaService.miPiace(notizia.id).subscribe(() => {
                    notizia.piace = true;
                    notizia.numeroPiace += 1;
                });
            }
        } else {
            this.navController.navigateRoot('login');
        }
    }
    async modificaNotizia(notizia: Notizia) {
        const modal = await this.modalController.create({
            component: NotiziaModalPage,
            componentProps: {appParam: notizia}
        });
        modal.onDidDismiss().then((detail: OverlayEventDetail) => {
            if (detail !== null && detail.data !== undefined) {
                this.notiziaService.modificaNotizia(detail.data, notizia.id).subscribe(() => {
                    this.ngOnInit();
                });
            } else {
                console.log('cancel button pressed');
            }
        });
        return await modal.present();
    }
}
