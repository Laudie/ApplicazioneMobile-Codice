import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Notizia} from '../../model/notizia.model';
import {NotiziaService} from '../../services/notizia.service';
import {Negozio} from '../../model/negozio.model';
import {NavController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators, FormsModule} from '@angular/forms';
import {NegozioService} from '../../services/negozio.service';

@Component({
    selector: 'app-notizie',
    templateUrl: './notizie.page.html',
    styleUrls: ['./notizie.page.scss'],
})
export class NotiziePage implements OnInit {
    private notizie$: Observable<Notizia[]>;
    private negozi$: Observable<Negozio[]>;
    private searchform: FormGroup;
    private ricerca: FormsModule;
    private vistanotizie: boolean;
    private citta: string;

    constructor(private notiziaService: NotiziaService,
                private negozioService: NegozioService,
                private navController: NavController,
                private formbuilder: FormBuilder) {
    }

    ngOnInit() {
        this.notizie$ = this.notiziaService.list();
        this.searchform = this.formbuilder.group({
            searchinput: ['', Validators.required]
        });
        this.vistanotizie = true;
        this.citta = '';
    }

    cerca() {
        this.citta = this.ricerca.toString();
        this.vistanotizie = false;
        this.negozi$ = this.negozioService.search(this.citta);
    }

    indietro() {
        this.vistanotizie = true;
    }

    ricarica(event) {
        this.notizie$ = this.notiziaService.list();

        setTimeout(() => {
            event.target.complete();
        }, 1000);
    }
}
