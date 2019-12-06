import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NuovoNegozio, NegozioService} from '../../services/negozio.service';

@Component({
  selector: 'app-aggiungi-negozio',
  templateUrl: './aggiungi-negozio.page.html',
  styleUrls: ['./aggiungi-negozio.page.scss'],
})
export class AggiungiNegozioPage implements OnInit {

  private negozioFormModel: FormGroup;
  constructor( private modalController: ModalController,
               private formBuilder: FormBuilder,
               private negozioService: NegozioService) { }
ngOnInit() {
  this.negozioFormModel = this.formBuilder.group({
    nome: ['sotto sopra', Validators.compose([Validators.required
    ])],
    descrizione: ['miglior negozio di teramo dal 2010', Validators.compose([
      Validators.required
    ])],
    orario: ['15/18', Validators.compose([
      Validators.required
    ])],
    categoria: ['abiti da cerimonia', Validators.compose([
      Validators.required
    ])],
    giorni: ['dal lunedì al venerdì', Validators.compose([
      Validators.required
    ])],
    piva: ['012345678910', Validators.compose([
      Validators.required
    ])],
    immagine: ['negozio4.jpg', Validators.compose([
      Validators.required
    ])],
    luogo: ['teramo', Validators.compose([
      Validators.required
    ])]
  });
}
  onSubmit() {
    const nuovoNegozio: NuovoNegozio = this.negozioFormModel.value;
    console.log(nuovoNegozio);
    this.negozioService.nuovoNegozio(nuovoNegozio);
  }
  homePage() {
    this.negozioService.home();
  }
  async cancel() {
    await this.modalController.dismiss();
  }
}
