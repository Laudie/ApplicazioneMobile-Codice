import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModalController, NavController} from '@ionic/angular';
import {NotiziaService, NuovaNotizia} from '../../services/notizia.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs';


@Component({
    selector: 'app-nuovanotizia',
    templateUrl: './nuovanotizia.page.html',
    styleUrls: ['./nuovanotizia.page.scss'],
})
export class NuovanotiziaPage implements OnInit {
    private idNegozio: number;
    private NuovoFormModel: FormGroup;

    // private notizia: Array<Notizia>;

    constructor(
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private modalController: ModalController,
        private navController: NavController,
        private notiziaService: NotiziaService,
    ) {
    }

    ngOnInit() {
        this.notiziaService.getidNegozio().subscribe(res => {
                this.idNegozio = res;
                console.log(this.idNegozio);
            }
        );
        /*this.idNegozio$ = this.notiziaService.getidNegozio();*/
        console.log(this.idNegozio);
        this.NuovoFormModel = this.formBuilder.group({
            titolo: ['', Validators.compose([Validators.required
            ])],
            descrizione: ['', Validators.compose([Validators.required
            ])],
            /*id_negozio: ''*/
        });
    }

    onSubmit() {
        //console.log(this.notizia.toString());
        // this.NuovoFormModel.patchValue({id_negozio: this.notizia.toString()});
        const nuovaNotizia: NuovaNotizia = this.NuovoFormModel.value;
        console.log(nuovaNotizia);
        this.notiziaService.nuovaNotizia(nuovaNotizia);
        this.NuovoFormModel.reset();
        this.navController.navigateRoot('tabs/notizie');
    }
}
