import {Component, OnInit} from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NuovoNegozio, NegozioService} from '../../services/negozio.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-aggiungi-negozio',
  templateUrl: './aggiungi-negozio.page.html',
  styleUrls: ['./aggiungi-negozio.page.scss'],
})
export class AggiungiNegozioPage implements OnInit {

  private imageUrl: string;
  private negozioFormModel: FormGroup;
  filetoUpload: File = null;
  toast: any;
  constructor(private modalController: ModalController,
              private formBuilder: FormBuilder,
              private negozioService: NegozioService,
              private navController: NavController,
              private toastController: ToastController,
  ) {
  }

  ngOnInit() {
    this.imageUrl = '../../../assets/logo/default.jpg';
    this.negozioFormModel = this.formBuilder.group({
      nome: ['prova', Validators.compose([Validators.required
      ])],
      descrizione: ['prova', Validators.compose([
        Validators.required
      ])],
      citta: ['prova', Validators.compose([
        Validators.required
      ])],
      via: ['prova', Validators.compose([
        Validators.required
      ])],
      immagineprofilo: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  onSubmit() {
    this.negozioFormModel.get('immagineprofilo').setValue(this.imageUrl.substring(this.imageUrl.indexOf(',') + 1));
    const nuovoNegozio: NuovoNegozio = this.negozioFormModel.value;
    console.log(nuovoNegozio);
    this.negozioService.nuovoNegozio(nuovoNegozio);
    this.imageUrl = '../../../assets/logo/default.jpg';
    this.showtoast();
    this.HideToast();
  }

  showtoast() {
    this.toast = this.toastController.create({
      message: 'Accedi per continuare',
      showCloseButton: true,
      position: 'middle',
      closeButtonText: 'Ok'
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
  HideToast() {
    this.modalController.dismiss()
    this.toast = this.toastController.dismiss();
    this.navController.navigateRoot('login') ;
  }

  async cancel() {
    // Reset immagine
    this.imageUrl = '../../../assets/logo/default.jpg';
    await this.modalController.dismiss();
  }

  handleFileInput(file: FileList) {
    this.filetoUpload = file.item(0);
    // SHow image preview
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;

      console.log(this.imageUrl);
    };
    reader.readAsDataURL(this.filetoUpload);
  }

}
