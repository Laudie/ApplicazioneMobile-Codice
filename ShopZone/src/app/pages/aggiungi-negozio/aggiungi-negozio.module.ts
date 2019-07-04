import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

import {AggiungiNegozioPage} from './aggiungi-negozio.page';

@NgModule({
    entryComponents: [AggiungiNegozioPage],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        IonicModule
    ],
    declarations: [AggiungiNegozioPage]
})
export class AggiungiNegozioPageModule {
}
