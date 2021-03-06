import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModalController, NavController, NavParams} from '@ionic/angular';
import {NotiziaService} from '../../services/notizia.service';
import {Notizia} from '../../model/notizia.model';
import {BehaviorSubject} from 'rxjs';
import {Utente} from '../../model/utente.model';


@Component({
    selector: 'app-notizia-modal',
    templateUrl: './notizia-modal.page.html',
    styleUrls: ['./notizia-modal.page.scss'],
})
export class NotiziaModalPage implements OnInit {
    private imageUrl: string;
    private notiziaFormModel: FormGroup;
    filetoUpload: File = null;
    private notizia: Notizia;
    private utente$: BehaviorSubject<Utente>;

    constructor(
        private formBuilder: FormBuilder,
        private navController: NavController,
        private notiziaService: NotiziaService,
        private modalController: ModalController,
        private navParams: NavParams,
    ) {
    }

    ngOnInit() {
        this.notizia = this.navParams.data.appParam;
        if (this.notizia.immagine != null) {
            this.imageUrl = 'data:image/png;base64,' + this.notizia.immagine;
        } else {
            this.imageUrl = '../../../assets/logo/upload.jpg';
        }
        this.notiziaFormModel = this.formBuilder.group({
            titolo: [this.notizia.titolo, Validators.compose([Validators.required
            ])],
            descrizione: [this.notizia.descrizione, Validators.compose([Validators.required
            ])],
            immagine: [this.imageUrl, Validators.compose([Validators.required
            ])]
        });
    }

     async onSubmit() {
        this.notizia.titolo = this.notiziaFormModel.value.titolo;
        this.notizia.descrizione = this.notiziaFormModel.value.descrizione;
        this.notiziaFormModel.get('immagine').setValue(this.imageUrl.substring(this.imageUrl.indexOf(',') + 1));
        this.notizia.immagine = this.notiziaFormModel.value.immagine;
        await this.modalController.dismiss(this.notizia);
    }

     async indietro() {
        this.imageUrl = '../../../assets/logo/upload.jpg';
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

     eliminaNotizia() {
        this.notiziaService.eliminaNotizia(this.notizia.id).subscribe(() => {
        this.modalController.dismiss();
        this.navController.navigateRoot(['tabs/notizie']); });
    }
}

