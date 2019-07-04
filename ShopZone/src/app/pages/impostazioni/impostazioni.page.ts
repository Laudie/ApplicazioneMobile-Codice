import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {AggiungiNegozioPage} from '../aggiungi-negozio/aggiungi-negozio.page';

@Component({
  selector: 'app-impostazioni',
  templateUrl: './impostazioni.page.html',
  styleUrls: ['./impostazioni.page.scss'],
})
export class ImpostazioniPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  async aggiungiNegozio() {
    const myModal = await this.modalController.create({
      component: AggiungiNegozioPage
    });
    await myModal.present();
    /* const negozio = new Negozio();
    negozio.categoria = TIPOLOGIA_CATEGORIA_STREETWEAR;
    appello.tipologiaEsame = TIPOLOGIA_ESAME_SCRITTO;
    appello.insegnamento = new Insegnamento();
    appello.insegnamento.id = this.idInsegnamento;
    const modal = await this.modalController.create({
      component: AggiungiNegozioPage,
      componentProps: {appParam: negozio}
    });
    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
      if (detail !== null && detail.data !== undefined) {
       /* this.insegnamentoService.createAppello(detail.data).subscribe(() => {
          this.listAppelli();
        });
        console.log('ok button pressed');
      } else {
        console.log('cancel button pressed');
      }
    });
    await modal.present();*/
  }
}
