import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {ImpostazioniPage} from './impostazioni.page';
import {TranslateModule} from '@ngx-translate/core';
import {AggiungiNegozioPageModule} from '../aggiungi-negozio/aggiungi-negozio.module';
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
        AggiungiNegozioPageModule,
        TranslateModule.forChild(),
        RouterModule.forChild(routes)
    ],
    declarations: [ImpostazioniPage]
})
export class ImpostazioniPageModule {
}
