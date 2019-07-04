import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ModificaPostModalPagePage} from '../modifica-post-modal-page/modifica-post-modal-page.page';


@Component({
  selector: 'app-negoziante-home',
  templateUrl: './negoziante-home.page.html',
  styleUrls: ['./negoziante-home.page.scss'],
})
export class NegozianteHomePage implements OnInit {

  constructor(private modalController: ModalController) { }

  async openModalModifica() {
     const myModal = await this.modalController.create({
      component: ModificaPostModalPagePage
     });
     await myModal.present();
  }
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
  ngOnInit() {}

}
