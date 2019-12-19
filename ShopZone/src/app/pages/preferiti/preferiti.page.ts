import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Notizia} from '../../model/notizia.model';
import {NotiziaService} from '../../services/notizia.service';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-preferiti',
    templateUrl: './preferiti.page.html',
    styleUrls: ['./preferiti.page.scss'],
})
export class PreferitiPage implements OnInit {
    private notizie$: Observable<Notizia[]>;

    constructor(private notiziaService: NotiziaService,
                private navController: NavController) {
    }

    ngOnInit() {
        this.notizie$ = this.notiziaService.preferiti();
    }

}
