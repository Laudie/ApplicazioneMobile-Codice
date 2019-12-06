import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {AggiungiNegozioPage} from '../aggiungi-negozio/aggiungi-negozio.page';
import {UtenteService} from '../../services/utente.service';
import {BehaviorSubject} from 'rxjs';
import {Utente} from '../../model/utente.model';
import {Content} from '@angular/compiler/src/render3/r3_ast';
@Component({
  selector: 'app-impostazioni',
  templateUrl: './impostazioni.page.html',
  styleUrls: ['./impostazioni.page.scss'],
})
export class ImpostazioniPage implements OnInit {
  private utente$: BehaviorSubject<Utente>;

  constructor(private modalController: ModalController,
              private utenteService: UtenteService,
              private navController: NavController
  ) {
  }

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
    this.navController.navigateRoot('tabs/notizie');
  }

  login() {
    this.navController.navigateRoot('login');
  }
}
