import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Notizia} from '../../model/notizia.model';
import {NotiziaService} from '../../services/notizia.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {UtenteService} from '../../services/utente.service';
import {Utente} from '../../model/utente.model';
import {OverlayEventDetail} from '@ionic/core';
import {ModalController, NavController} from '@ionic/angular';
import {NuovanotiziaPage} from '../nuovanotizia/nuovanotizia.page';


@Component({
    selector: 'app-dettaglio',
    templateUrl: './dettaglio.page.html',
    styleUrls: ['./dettaglio.page.scss'],
})
export class DettaglioPage implements OnInit {
    notizia$: Observable<Notizia>;
    utente$: BehaviorSubject<Utente>;

    constructor(private route: ActivatedRoute,
                private notiziaService: NotiziaService,
                private modalController: ModalController,
                private navController: NavController,
                private utenteService: UtenteService,
    ) {
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

    ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            if (this.utenteService.isLogged()) {
                this.utente$ = this.utenteService.getUtente();
            }
            this.notizia$ = this.notiziaService.findById(parseInt(params.get('id'), 0));
        });
    }

    async modificaNotizia(notizia: Notizia) {
        const modal = await this.modalController.create({
            component: NuovanotiziaPage,
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
