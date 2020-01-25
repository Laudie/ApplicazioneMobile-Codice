import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DettaglioNegozioPage } from './dettaglio-negozio.page';
import {TranslateModule} from '@ngx-translate/core';
import {AggiungiNegozioPageModule} from '../aggiungi-negozio/aggiungi-negozio.module';

const routes: Routes = [
  {
    path: '',
    component: DettaglioNegozioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    AggiungiNegozioPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DettaglioNegozioPage]
})
export class DettaglioNegozioPageModule {}
