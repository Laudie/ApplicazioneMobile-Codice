import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Notizia} from '../../model/notizia.model';
import {NotiziaService} from '../../services/notizia.service';
import {Observable, of} from 'rxjs';
import {forEach} from '@angular-devkit/schematics';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.page.html',
  styleUrls: ['./dettaglio.page.scss'],
})
export class DettaglioPage implements OnInit {
  private notizia$: Observable<Notizia>;
  visible = false;
  slides: any[];
  constructor(private route: ActivatedRoute,
              private notiziaService: NotiziaService) { }
  onLike() {
    this.visible = !this.visible;
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.notizia$ = this.notiziaService.findById(parseInt(params.get('id'), 0));
    });
  }
}
