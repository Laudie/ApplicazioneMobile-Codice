import {Component, OnInit} from '@angular/core';
import {ModalController, NavController, NavParams} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NegozioService} from '../../services/negozio.service';
import {ToastController} from '@ionic/angular';
import {Negozio} from '../../model/negozio.model';
import {BehaviorSubject} from 'rxjs';
import {Utente} from '../../model/utente.model';
import {UtenteService} from '../../services/utente.service';

@Component({
    selector: 'app-aggiungi-negozio',
    templateUrl: './aggiungi-negozio.page.html',
    styleUrls: ['./aggiungi-negozio.page.scss'],
})
export class AggiungiNegozioPage implements OnInit {

    private imageUrl: string;
    private negozioFormModel: FormGroup;
    filetoUpload: File = null;
    toast: any;
    private negozio: Negozio;
    private utente$: BehaviorSubject<Utente>;

    constructor(private modalController: ModalController,
                private formBuilder: FormBuilder,
                private negozioService: NegozioService,
                private navController: NavController,
                private toastController: ToastController,
                private navParams: NavParams,
                private utenteService: UtenteService,
    ) {
    }
    ngOnInit() {
        this.utente$ = this.utenteService.getUtente();
        this.negozio = this.navParams.data.appParam;
        if (this.negozio.immagineprofilo != null) {
            this.imageUrl = 'data:image/png;base64,' + this.negozio.immagineprofilo;
        } else {
            this.imageUrl = '../../../assets/logo/default.jpg';
        }
        this.negozioFormModel = this.formBuilder.group({
            nome: [this.negozio.nome, Validators.compose([Validators.required
            ])],
            descrizione: [this.negozio.descrizione, Validators.compose([
                Validators.required
            ])],
            citta: [this.negozio.citta, Validators.compose([
                Validators.required
            ])],
            via: [this.negozio.via, Validators.compose([
                Validators.required
            ])],
            immagineprofilo: [ this.imageUrl , Validators.compose([
                Validators.required
            ])]
        });
    }


    async onSubmit() {
        this.negozio.nome = this.negozioFormModel.value.nome;
        this.negozio.descrizione = this.negozioFormModel.value.descrizione;
        this.negozio.via = this.negozioFormModel.value.via;
        this.negozio.citta = this.negozioFormModel.value.citta;
        this.negozioFormModel.get('immagineprofilo').setValue(this.imageUrl.substring(this.imageUrl.indexOf(',') + 1));
        this.negozio.immagineprofilo = this.negozioFormModel.value.immagineprofilo;
        await this.modalController.dismiss(this.negozio);
    }
    async indietro() {
        // Reset immagine
        this.imageUrl = '../../../assets/logo/default.jpg';
        await this.modalController.dismiss();
    }

    handleFileInput(file: FileList) {
        this.filetoUpload = file.item(0);
        // SHow image preview
        const reader = new FileReader();
        reader.onload = (event: any) => {
            this.imageUrl = event.target.result;
        };
        reader.readAsDataURL(this.filetoUpload);
    }

}
