import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {AggiungiNegozioPage} from '../aggiungi-negozio/aggiungi-negozio.page';
import {UtenteService} from '../../services/utente.service';

@Component({
  selector: 'app-impostazioni',
  templateUrl: './impostazioni.page.html',
  styleUrls: ['./impostazioni.page.scss'],
})
export class ImpostazioniPage implements OnInit {

  constructor(private modalController: ModalController,
              private utenteService: UtenteService) { }

  ngOnInit() {
  }
  async aggiungiNegozio() {
    const myModal = await this.modalController.create({
      component: AggiungiNegozioPage
    });
    await myModal.present();
  }

  logout() {
    this.utenteService.logout();
  }
}
