import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Observable} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Negozio} from '../../model/negozio.model';
import {NegozioService} from '../../services/negozio.service';
import {Notizia} from '../../model/notizia.model';
import {NotiziaService} from '../../services/notizia.service';


@Component({
  selector: 'app-negoziante-home',
  templateUrl: './negoziante-home.page.html',
  styleUrls: ['./negoziante-home.page.scss'],
})
export class NegozianteHomePage implements OnInit {
    private negozio$: Observable<Negozio>;
    private idNegozio: number;
    private notizie$: Observable<Notizia[]>;
    private vistaGriglia: boolean;
  constructor(private modalController: ModalController,
              private negozioService: NegozioService,
              private notiziaService: NotiziaService,
              private route: ActivatedRoute) { }

  /*async openModalModifica() {
     const myModal = await this.modalController.create({
      component: ModificaPostModalPagePage
     });
     await myModal.present();
  }*/
/*
  async presentModal({
    const modal = await this.modalController.create({
      component: ModificaPostModalPagePage,
      componentProps:{
        value:123
      }
    });
    return await modal.present();
  }
*/
  ngOnInit() {
      this.route.paramMap.subscribe((params: ParamMap) => {
          this.vistaGriglia = true;
          this.idNegozio = parseInt(params.get('id'), 0);
          this.listaNotizie();
      });

  }
    listaNotizie() {
        this.notizie$ = this.notiziaService.listaNotizie(this.idNegozio);
    }
    segmentChanged($event: CustomEvent<any>) {
        this.vistaGriglia = ! this.vistaGriglia ;
    }
}
