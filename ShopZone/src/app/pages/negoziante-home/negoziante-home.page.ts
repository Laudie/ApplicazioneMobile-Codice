import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Observable} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Negozio} from '../../model/negozio.model';
import {NegozioService} from '../../services/negozio.service';


@Component({
  selector: 'app-negoziante-home',
  templateUrl: './negoziante-home.page.html',
  styleUrls: ['./negoziante-home.page.scss'],
})
export class NegozianteHomePage implements OnInit {
    private negozio$: Observable<Negozio>;

  constructor(private modalController: ModalController,
              private negozioService: NegozioService,
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
      this.negozio$ = this.negozioService.home();
  }

}
