import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModalController, NavParams} from '@ionic/angular';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.page.html',
  styleUrls: ['./registrazione.page.scss'],
})
export class RegistrazionePage implements OnInit {

  private registrazioneFormModel: FormGroup;
  constructor(
      private formBuilder: FormBuilder,
      private modalController: ModalController
  ) { }

  ngOnInit() {
    this.registrazioneFormModel = this.formBuilder.group({
      name: ['Laura', Validators.compose([Validators.required
      ])],
      surname: ['Di Egidio', Validators.compose([
        Validators.required
      ])],
      username: ['Laurett', Validators.compose([
        Validators.required
      ])],
      password: ['Laura10', Validators.compose([
        Validators.required
      ])]
    });
  }
  async onSubmit() {
  }
  }
