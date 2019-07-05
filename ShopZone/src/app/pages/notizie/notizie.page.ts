import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Notizia} from '../../model/notizia.model';
import {NotiziaService} from '../../services/notizia.service';

@Component({
  selector: 'app-notizie',
  templateUrl: './notizie.page.html',
  styleUrls: ['./notizie.page.scss'],
})
export class NotiziePage implements OnInit {
private notizie$: Observable<Notizia[]>;
  constructor(private notiziaService: NotiziaService) { }

  ngOnInit() {
    this.notizie$ = this.notiziaService.list();
  }

}
