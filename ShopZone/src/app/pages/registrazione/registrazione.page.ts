import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModalController, NavParams} from '@ionic/angular';
import {TranslateService} from '@ngx-translate/core';
import {NuovoUtente, UtenteService} from '../../services/utente.service';
import {Observable} from 'rxjs';
import {Utente} from '../../model/utente.model';

@Component({
    selector: 'app-registrazione',
    templateUrl: './registrazione.page.html',
    styleUrls: ['./registrazione.page.scss'],
})
export class RegistrazionePage implements OnInit {
    private registrazione$: Observable<boolean>;
    private registrazioneFormModel: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private modalController: ModalController,
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
        const nuovoUtente: NuovoUtente = this.registrazioneFormModel.value;
        console.log(nuovoUtente);
        this.utenteService.nuovoUtente(nuovoUtente);
    }
}
