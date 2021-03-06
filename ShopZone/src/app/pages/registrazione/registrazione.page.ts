import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModalController, NavController} from '@ionic/angular';
import {NuovoUtente, UtenteService} from '../../services/utente.service';
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
            nome: ['Mario', Validators.compose([Validators.required
            ])],
            cognome: ['Rossi', Validators.compose([
                Validators.required
            ])],
            email: ['MarioRossi@gmail.it', Validators.compose([
                Validators.required
            ])],
            username: ['mario', Validators.compose([
                Validators.required
            ])],
            password: ['mario', Validators.compose([
                Validators.required
            ])]
        });
    }

    onSubmit() {
        const nuovoUtente: NuovoUtente = this.registrazioneFormModel.value;
        this.utenteService.nuovoUtente(nuovoUtente).subscribe(() => {
            this.registrazioneFormModel.reset();
            this.navController.navigateRoot('login');
        });
    }
}
