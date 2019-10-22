import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

import {AggiungiNegozioPage} from './aggiungi-negozio.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    entryComponents: [AggiungiNegozioPage],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        IonicModule,
        TranslateModule
    ],
    declarations: [AggiungiNegozioPage]
})
export class AggiungiNegozioPageModule {
}
