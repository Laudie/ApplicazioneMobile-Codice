import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Notizia} from '../../model/notizia.model';
import {NotiziaService} from '../../services/notizia.service';
import {Negozio} from '../../model/negozio.model';
import {NavController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {__await} from 'tslib';

@Component({
    selector: 'app-notizie',
    templateUrl: './notizie.page.html',
    styleUrls: ['./notizie.page.scss'],
})
export class NotiziePage implements OnInit {
    private notizie$: Observable<Notizia[]>;
    private negozi$: Observable<Negozio[]>;
    private searchform: FormGroup;
    private vistanotizie: boolean;

    constructor(private notiziaService: NotiziaService,
                private navController: NavController,
                private formbuilder: FormBuilder) {
    }

    ngOnInit() {
        this.searchform = this.formbuilder.group({
            searchinput: ['', Validators.required]
        });
        this.vistanotizie = true;
        this.notizie$ = this.notiziaService.list();
    }

    search() {
        const luogo: string = this.searchform.value;
        this.vistanotizie = false;
        this.negozi$ = this.notiziaService.search(luogo);
        /*.subscribe((negozi$: Negozio[]) => {


            },
            (err: HttpErrorResponse) => {
                if (err.status === 401) {
                    console.error('login request error: ' + err.status);
                }
            });*/
    }
    back() {
        this.vistanotizie = true;
    }
}
