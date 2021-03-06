import {Component, OnInit} from '@angular/core';

import {NavController, Platform} from '@ionic/angular';
import {TranslateService} from '@ngx-translate/core';
import {LinguaService} from './services/lingua.service';
import {UtenteService} from './services/utente.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private platform: Platform,
              private utenteService: UtenteService,
              private translate: TranslateService,
              private navController: NavController,
              private linguaService: LinguaService
  ) {
    this.initializeApp();
  }


  ngOnInit(): void {
    this.navController.navigateRoot('tabs/notizie');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.initTranslate();
    });
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    const linguaPreferita = this.linguaService.getLinguaPreferita();
    this.translate.setDefaultLang(linguaPreferita);
    this.linguaService.getLinguaAttuale().subscribe((lingua: string) => {
      if (lingua != null) {
        this.translate.use(lingua);
      } else {
        this.translate.use(linguaPreferita);
        this.linguaService.updateLingua(linguaPreferita);
      }
    });
  }
}
