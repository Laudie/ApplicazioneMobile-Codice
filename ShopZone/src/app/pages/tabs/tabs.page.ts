import {Component, OnInit} from '@angular/core';
import {UtenteService} from '../../services/utente.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {Utente} from '../../model/utente.model';
import {Notizia} from '../../model/notizia.model';
import {ModalController, NavController} from '@ionic/angular';
import {OverlayEventDetail} from '@ionic/core';
import {NotiziaService} from '../../services/notizia.service';
import {FormBuilder} from '@angular/forms';
import {NuovanotiziaPage} from '../nuovanotizia/nuovanotizia.page';
@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.page.html',
    styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
    private utente$: BehaviorSubject<Utente>;
    private notizie$: Observable<Notizia[]>;


    constructor(private utenteService: UtenteService,
                private modalController: ModalController,
                private notiziaService: NotiziaService,
                private formBuilder: FormBuilder,
                private navController: NavController) {
    }

    ngOnInit() {
        this.utente$ = this.utenteService.getUtente();
    }

    async aggiungiNotizia() {
        const notizia = new Notizia();
        const modal = await this.modalController.create({
            component: NuovanotiziaPage,
            componentProps: {appParam: notizia}
        });
        modal.onDidDismiss().then((detail: OverlayEventDetail) => {
            if (detail !== null && detail.data !== undefined) {
                this.notiziaService.nuovaNotizia(detail.data).subscribe(() => {
                this.notizie$ = this.notiziaService.list();
                location.reload();
                });
            } else {
                console.log('cancel button pressed');
            }
        });
        return await modal.present();
    }

}
