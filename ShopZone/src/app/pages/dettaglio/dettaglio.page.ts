import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Notizia} from '../../model/notizia.model';
import {NotiziaService} from '../../services/notizia.service';
import {Observable} from 'rxjs';


@Component({
    selector: 'app-dettaglio',
    templateUrl: './dettaglio.page.html',
    styleUrls: ['./dettaglio.page.scss'],
})
export class DettaglioPage implements OnInit {
    notizia$: Observable<Notizia>;

    constructor(private route: ActivatedRoute,
                private notiziaService: NotiziaService
    ) {
    }

    miPiace(notizia: Notizia) {
        if (notizia.piace) {
            notizia.piace = false;
            notizia.numeroPiace -= 1;
            this.notiziaService.miPiace(notizia.id, 0);
        } else {
            notizia.piace = true;
            notizia.numeroPiace += 1;
            this.notiziaService.miPiace(notizia.id, 1);
        }
    }

    ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.notizia$ = this.notiziaService.findById(parseInt(params.get('id'), 0));
        });
    }
}
