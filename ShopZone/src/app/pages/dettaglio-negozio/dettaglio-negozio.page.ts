import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Negozio} from '../../model/negozio.model';
import {NegozioService} from '../../services/negozio.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-dettaglio-negozio',
  templateUrl: './dettaglio-negozio.page.html',
  styleUrls: ['./dettaglio-negozio.page.scss'],
})
export class DettaglioNegozioPage implements OnInit {
  private negozio$: Observable<Negozio>;

  constructor(private route: ActivatedRoute, private negozioService: NegozioService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.negozio$ = this.negozioService.findById(parseInt(params.get('id'), 0));
    });
  }

}
