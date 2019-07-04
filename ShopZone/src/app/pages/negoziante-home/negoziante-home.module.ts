import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NegozianteHomePage } from './negoziante-home.page';
import {TranslateModule} from '@ngx-translate/core';
import {ModificaPostModalPagePageModule} from '../modifica-post-modal-page/modifica-post-modal-page.module';



const routes: Routes = [
  {
    path: '',
    component: NegozianteHomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificaPostModalPagePageModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes)
  ],
  declarations: [NegozianteHomePage]
})
export class NegozianteHomePageModule {}
