import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-aggiungi-negozio',
  templateUrl: './aggiungi-negozio.page.html',
  styleUrls: ['./aggiungi-negozio.page.scss'],
})
export class AggiungiNegozioPage implements OnInit {

  private negozioFormModel: FormGroup;
  constructor( private modalController: ModalController,
               private formBuilder: FormBuilder) { }
ngOnInit() {
  this.negozioFormModel = this.formBuilder.group({
    Nome: ['Aggiungi nome', Validators.compose([
        Validators.required])]
  });
}
  async onSubmit() {
  }
  async cancel() {
    await this.modalController.dismiss();
  }
}
