import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Notizia} from '../../model/notizia.model';
import {NotiziaService} from '../../services/notizia.service';
import {Negozio} from '../../model/negozio.model';
import {NavController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators, FormsModule} from '@angular/forms';

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
    private luogo: string;
    constructor(private notiziaService: NotiziaService,
                private navController: NavController,
                private formbuilder: FormBuilder) {
    }

    ngOnInit() {
        this.searchform = this.formbuilder.group({
            searchinput: ['', Validators.required]
        });
        this.vistanotizie = true;
        this.luogo = '';
        this.notizie$ = this.notiziaService.list();
    }

    cerca() {
          this.luogo = this.ricerca.toString();
            this.vistanotizie = false;
            this.negozi$ = this.notiziaService.search(this.luogo);
    }
    indietro() {
        this.vistanotizie = true;
    }
}
