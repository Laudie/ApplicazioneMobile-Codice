import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModalController, NavController, NavParams} from '@ionic/angular';
import {TranslateService} from '@ngx-translate/core';
import { UtenteService} from '../../services/utente.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-registrazione',
    templateUrl: './registrazione.page.html',
    styleUrls: ['./registrazione.page.scss'],
})
export class RegistrazionePage implements OnInit {
    private registrazioneFormModel: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private modalController: ModalController,
        private navController: NavController,
        private utenteService: UtenteService
    ) {
    }

    ngOnInit() {

        this.registrazioneFormModel = this.formBuilder.group({
            nome: ['Laura', Validators.compose([Validators.required
            ])],
            cognome: ['Di Egidio', Validators.compose([
                Validators.required
            ])],
            email: ['xxx@xxx.it', Validators.compose([
                Validators.required
            ])],
            username: ['Laurett', Validators.compose([
                Validators.required
            ])],
            password: ['Laura10', Validators.compose([
                Validators.required
            ])]
        });
    }

    onSubmit() {
        // const nuovoUtente: NuovoUtente = this.registrazioneFormModel.value;
       // console.log(nuovoUtente);
        // this.utenteService.nuovoUtente(nuovoUtente);
        this.registrazioneFormModel.reset();
        this.navController.navigateRoot('login');
    }
}
