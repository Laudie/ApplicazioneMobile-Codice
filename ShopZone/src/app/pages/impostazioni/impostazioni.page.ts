import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {AggiungiNegozioPage} from '../aggiungi-negozio/aggiungi-negozio.page';
import {UtenteService} from '../../services/utente.service';
import {BehaviorSubject} from 'rxjs';
import {Utente} from '../../model/utente.model';

@Component({
  selector: 'app-impostazioni',
  templateUrl: './impostazioni.page.html',
  styleUrls: ['./impostazioni.page.scss'],
})
export class ImpostazioniPage implements OnInit {
  private utente$: BehaviorSubject<Utente>;

  constructor(private modalController: ModalController,
              private utenteService: UtenteService) { }

  ngOnInit() {
      if (this.utenteService.isLogged()) {
        this.utente$ = this.utenteService.getUtente();
      }
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
