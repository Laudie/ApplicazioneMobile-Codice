import {Component, OnInit} from '@angular/core';
import {UtenteService} from '../../services/utente.service';
import {BehaviorSubject} from 'rxjs';
import {Utente} from '../../model/utente.model';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.page.html',
    styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
    private utente$: BehaviorSubject<Utente>;
    private negoziante: boolean;
    constructor(private utenteService: UtenteService) {
    }

    ngOnInit() {
        if (this.utenteService.isLogged()) {
            this.utente$ = this.utenteService.getUtente();
            this.negoziante = true;
            console.log(this.negoziante);
        } else {
            this.negoziante = false;
            console.log(this.negoziante);
        }
    }
}
