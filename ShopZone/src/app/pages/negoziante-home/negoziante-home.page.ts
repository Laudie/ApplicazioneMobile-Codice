import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ModificaPostModalPagePage} from '../modifica-post-modal-page/modifica-post-modal-page.page';
import {Observable} from 'rxjs';
import {Utente} from '../../model/utente.model';
import {UtenteService} from '../../services/utente.service';
import {ActivatedRoute, ParamMap} from "@angular/router";


@Component({
  selector: 'app-negoziante-home',
  templateUrl: './negoziante-home.page.html',
  styleUrls: ['./negoziante-home.page.scss'],
})
export class NegozianteHomePage implements OnInit {
    private utente$: Observable<Utente>;

  constructor(private modalController: ModalController,
              private utenteService: UtenteService,
              private route: ActivatedRoute) { }

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
  ngOnInit() {
      this.route.paramMap.subscribe((params: ParamMap) => {
          this.utente$ = this.utenteService.getUtente();
      });
      console.log(this.utente$);
  }

}
