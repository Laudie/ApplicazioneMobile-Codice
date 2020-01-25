import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import { DettaglioPage } from './dettaglio.page';
import {NuovanotiziaPageModule} from '../nuovanotizia/nuovanotizia.module';
import {TranslateModule} from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: DettaglioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    // NuovanotiziaPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DettaglioPage],
})
export class DettaglioPageModule {}
