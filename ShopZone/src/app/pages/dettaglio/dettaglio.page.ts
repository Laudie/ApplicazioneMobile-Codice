import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Notizia} from '../../model/notizia.model';
import {NotiziaService} from '../../services/notizia.service';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.page.html',
  styleUrls: ['./dettaglio.page.scss'],
})
export class DettaglioPage implements OnInit {
  private notizia: Notizia;

  constructor(private route: ActivatedRoute,
              private notiziaService: NotiziaService) {
  }
  visible = false;
  onLike() {
    this.visible = !this.visible;
  }
  ngOnInit() {
    this.notizia = this.notiziaService.findById(parseInt(this.route.snapshot.paramMap.get('id'), 0));
  }
}
