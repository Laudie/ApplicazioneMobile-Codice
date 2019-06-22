import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertController, NavController} from '@ionic/angular';
import {TranslateService} from '@ngx-translate/core';
import {Account, UtenteService} from '../../services/utente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private loginFormModel: FormGroup;
  private loginTitle: string;
  private loginSubTitle: string;

  constructor(private formBuilder: FormBuilder,
              private alertController: AlertController,
              private translateService: TranslateService,
              private navController: NavController,
              private utenteService: UtenteService) {
  }

  ngOnInit() {
    this.loginFormModel = this.formBuilder.group({
      username: ['amleto', Validators.compose([
        Validators.required
      ])],
      password: ['amleto', Validators.compose([
        Validators.required
      ])]
    });
    this.initTranslate();
  }

  onLogin() {
    const account: Account = this.loginFormModel.value;
    if (this.utenteService.login(account)) {
      this.navController.navigateRoot('tabs/preferiti');
    } else {
      this.navController.navigateRoot('login');
    }
  }
  async showLoginError() {
    const alert = await this.alertController.create({
      header: this.loginTitle,
      message: this.loginSubTitle,
      buttons: ['OK']
    });

    await alert.present();
  }


  private initTranslate() {
    this.translateService.get('LOGIN_ERROR_SUB_TITLE').subscribe((data) => {
      this.loginSubTitle = data;
    });
    this.translateService.get('LOGIN_ERROR_TITLE').subscribe((data) => {
      this.loginTitle = data;
    });
  }

}
