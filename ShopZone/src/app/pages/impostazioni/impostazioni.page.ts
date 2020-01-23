import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {AggiungiNegozioPage} from '../aggiungi-negozio/aggiungi-negozio.page';
import {UtenteService} from '../../services/utente.service';
import {BehaviorSubject} from 'rxjs';
import {Utente} from '../../model/utente.model';
import {Lingua, LinguaService} from '../../services/lingua.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-impostazioni',
    templateUrl: './impostazioni.page.html',
    styleUrls: ['./impostazioni.page.scss'],
})
export class ImpostazioniPage implements OnInit {
    private utente$: BehaviorSubject<Utente>;
    private lingue: Lingua[];
    private linguaFormModel: FormGroup;

    constructor(private modalController: ModalController,
                private utenteService: UtenteService,
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
        const myModal = await this.modalController.create({
            component: AggiungiNegozioPage
        });
        await myModal.present();

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
