import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModalController, NavController} from '@ionic/angular';
import {NotiziaService, NuovaNotizia} from '../../services/notizia.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
    selector: 'app-nuovanotizia',
    templateUrl: './nuovanotizia.page.html',
    styleUrls: ['./nuovanotizia.page.scss'],
})
export class NuovanotiziaPage implements OnInit {
    private imageUrl: string;
    private NuovoFormModel: FormGroup;
    filetoUpload: File = null;

    constructor(
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private navController: NavController,
        private notiziaService: NotiziaService,
    ) {
    }

    ngOnInit() {
        this.imageUrl = '../../../assets/logo/default.jpg';
        this.NuovoFormModel = this.formBuilder.group({
            titolo: ['', Validators.compose([Validators.required
            ])],
            descrizione: ['', Validators.compose([Validators.required
            ])],
            immagine: ['', Validators.compose([Validators.required
            ])]
        });
    }

     pubblica() {
        this.NuovoFormModel.get('immagine').setValue(this.imageUrl.substring(this.imageUrl.indexOf(',') + 1));
        const nuovaNotizia: NuovaNotizia = this.NuovoFormModel.value;
        this.notiziaService.nuovaNotizia(nuovaNotizia);
        this.NuovoFormModel.reset();
        this.imageUrl = '../../../assets/logo/default.jpg';
        this.navController.navigateRoot('tabs/notizie');
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

    indietro() {
        this.imageUrl = '../../../assets/logo/default.jpg';
        this.NuovoFormModel.reset();
    }
}

