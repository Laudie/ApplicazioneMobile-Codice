import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import {TranslateModule} from '@ngx-translate/core';
import {NotiziePage} from './notizie.page';

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
        RouterModule.forChild(routes),
        ReactiveFormsModule
    ],
  declarations: [NotiziePage]
})
export class NotiziePageModule {}
