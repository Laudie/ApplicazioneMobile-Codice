import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NegozioDettaglioPage } from './negozio-dettaglio.page';
import {TranslateModule} from '@ngx-translate/core';
import {NegozioModalPageModule} from '../negozio-modal/negozio-modal.module';

const routes: Routes = [
  {
    path: '',
    component: NegozioDettaglioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    NegozioModalPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NegozioDettaglioPage]
})
export class NegozioDettaglioPageModule {}
