import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {ImpostazioniPage} from './impostazioni.page';
import {TranslateModule} from '@ngx-translate/core';
import {NegozioModalPageModule} from '../negozio-modal/negozio-modal.module';
const routes: Routes = [
    {
        path: '',
        component: ImpostazioniPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NegozioModalPageModule,
        TranslateModule.forChild(),
        RouterModule.forChild(routes),
        ReactiveFormsModule
    ],
    declarations: [ImpostazioniPage]
})
export class ImpostazioniPageModule {
}
