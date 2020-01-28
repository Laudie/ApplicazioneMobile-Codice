import {Component, OnInit} from '@angular/core';
import {AlertController, ModalController, NavController} from '@ionic/angular';
import {NegozioModalPage} from '../negozio-modal/negozio-modal.page';
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
    private negozioAggiuntoOk: string;
    private messaggio: string;
    private negozioEliminatoOk: string;

    constructor(private modalController: ModalController,
                private utenteService: UtenteService,
                private negozioService: NegozioService,
                private translateService: TranslateService,
                private linguaService: LinguaService,
                private formBuilder: FormBuilder,
                private alertController: AlertController,
                private navController: NavController) {
    }

    ngOnInit() {
        this.lingue = this.linguaService.getLingue();
        if (this.utenteService.isLogged()) {
            this.utente$ = this.utenteService.getUtente();
        }
        this.initTranslate();
    }

    private initTranslate() {
        this.translateService.get('NEGOZIO_AGGIUNTO_CON_SUCCESSO').subscribe((data) => {
            this.negozioAggiuntoOk = data;
        });
        this.translateService.get('ACCEDI_PER_CONTINUARE').subscribe((data) => {
            this.messaggio = data;
        });
        this.translateService.get('NEGOZIO_ELIMINATO_CON_SUCCESSO').subscribe((data) => {
            this.negozioEliminatoOk = data;
        });
    }

    async aggiungiNegozio() {
        const negozio = new Negozio();
        const modal = await this.modalController.create({
            component: NegozioModalPage,
            componentProps: {appParam: negozio}
        });
        modal.onDidDismiss().then((detail: OverlayEventDetail) => {
            if (detail !== null && detail.data !== undefined) {
                this.negozioService.nuovoNegozio(detail.data).subscribe(() => {
                    this.login();
                    this.negozioAggiunto();
                });
            } else {
                console.log('cancel button pressed');
            }
        });
        return await modal.present();
    }

    async negozioAggiunto() {
        const alert = await this.alertController.create({
            header: this.negozioAggiuntoOk,
            message: this.messaggio,
            buttons: ['OK']
        });

        await alert.present();
    }

    eliminaNegozio() {
        this.negozioService.eliminaNegozio(this.utente$.getValue().negozio.id)
            .subscribe(() => {
                this.login();
                this.negozioEliminato();
            });
    }

    async negozioEliminato() {
        const alert = await this.alertController.create({
            header: this.negozioEliminatoOk,
            message: this.messaggio,
            buttons: ['OK']
        });

        await alert.present();
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

}
