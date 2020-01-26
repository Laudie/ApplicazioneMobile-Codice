import {Component, OnInit} from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {AggiungiNegozioPage} from '../aggiungi-negozio/aggiungi-negozio.page';
import {UtenteService} from '../../services/utente.service';
import {BehaviorSubject} from 'rxjs';
import {Utente} from '../../model/utente.model';
import {Lingua, LinguaService} from '../../services/lingua.service';
import {FormBuilder} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {Negozio} from '../../model/negozio.model';
import {OverlayEventDetail} from '@ionic/core';
import {NegozioService} from '../../services/negozio.service';

@Component({
    selector: 'app-impostazioni',
    templateUrl: './impostazioni.page.html',
    styleUrls: ['./impostazioni.page.scss'],
})
export class ImpostazioniPage implements OnInit {
    private utente$: BehaviorSubject<Utente>;
    private lingue: Lingua[];

    constructor(private modalController: ModalController,
                private utenteService: UtenteService,
                private negozioService: NegozioService,
                private translateService: TranslateService,
                private linguaService: LinguaService,
                private formBuilder: FormBuilder,
                private navController: NavController) {
    }

    ngOnInit() {
        this.lingue = this.linguaService.getLingue();
        if (this.utenteService.isLogged()) {
            this.utente$ = this.utenteService.getUtente();
        }
    }

    async aggiungiNegozio() {
        const negozio = new Negozio();
        const modal = await this.modalController.create({
            component: AggiungiNegozioPage,
            componentProps: {appParam: negozio}
        });
        modal.onDidDismiss().then((detail: OverlayEventDetail) => {
            if (detail !== null && detail.data !== undefined) {
                this.negozioService.nuovoNegozio(detail.data).subscribe(() => {
                    this.login();
                });
            } else {
                console.log('cancel button pressed');
            }
        });
        return await modal.present();
    }

    logout() {
        this.utenteService.logout();
        this.navController.navigateRoot('tabs/notizie');
    }

    login() {
        this.navController.navigateRoot('login');
    }

    changeLanguage(event) {
        if (event.detail.value === 'it') {
            this.translateService.setDefaultLang('it');
            this.translateService.use('it');
        } else {
            this.translateService.setDefaultLang('en');
            this.translateService.use('en');
        }
    }

    eliminaNegozio() {
        this.negozioService.eliminaNegozio(this.utente$.getValue().negozio.id)
            .subscribe(() => {
                this.logout();
                this.login();
            });
    }
}
