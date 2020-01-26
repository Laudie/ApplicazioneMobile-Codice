import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Notizia} from '../../model/notizia.model';
import {NotiziaService} from '../../services/notizia.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {UtenteService} from '../../services/utente.service';
import {Utente} from '../../model/utente.model';
import {OverlayEventDetail} from '@ionic/core';
import {ModalController} from '@ionic/angular';
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
                private utenteService: UtenteService,
    ) {
    }

    miPiace(notizia: Notizia) {
        if (notizia.piace) {
            notizia.piace = false;
            notizia.numeroPiace -= 1;
            this.notiziaService.miPiace(notizia.id, 0);
        } else {
            notizia.piace = true;
            notizia.numeroPiace += 1;
            this.notiziaService.miPiace(notizia.id, 1);
        }
    }

     ngOnInit() {
         this.route.paramMap.subscribe((params: ParamMap) => {
             this.utente$ = this.utenteService.getUtente();
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
