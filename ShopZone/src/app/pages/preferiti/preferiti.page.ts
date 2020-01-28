import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {NavController} from '@ionic/angular';
import {Negozio} from '../../model/negozio.model';
import {NegozioService} from '../../services/negozio.service';

@Component({
    selector: 'app-preferiti',
    templateUrl: './preferiti.page.html',
    styleUrls: ['./preferiti.page.scss'],
})
export class PreferitiPage implements OnInit {
    private negozi$: Observable<Negozio[]>;

    constructor(private negozioService: NegozioService,
                private navController: NavController) {
    }

    ngOnInit() {
        this.negozi$ = this.negozioService.preferiti();
    }
    ionViewWillEnter() {
        this.negozi$ = this.negozioService.preferiti();  }
}
