import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Notizia} from '../../model/notizia.model';
import {NotiziaService} from '../../services/notizia.service';
import {Observable, of} from 'rxjs';


@Component({
    selector: 'app-dettaglio',
    templateUrl: './dettaglio.page.html',
    styleUrls: ['./dettaglio.page.scss'],
})
export class DettaglioPage implements OnInit {
    notizia$: Observable<Notizia>;
    slides: any[];

    constructor(private route: ActivatedRoute,
                private notiziaService: NotiziaService
    ) {
    }

    onLike(n: Notizia) {
        if (n.piace) {
            n.piace = false;
            n.numeroPiace -= 1;
        } else {
            n.piace = true;
            n.numeroPiace += 1;
        }
    }

    ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.notizia$ = this.notiziaService.findById(parseInt(params.get('id'), 0));
        });
    }
}
