import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NotiziePage } from './notizie.page';

import {TranslateModule} from '@ngx-translate/core';
import {DettaglioPage} from '../dettaglio/dettaglio.page';

const routes: Routes = [
  {
    path: '',
    component: NotiziePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes)
  ],
  declarations: [NotiziePage]
})
export class NotiziePageModule {}
