import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

import {NegozioModalPage} from './negozio-modal.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    entryComponents: [NegozioModalPage],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        IonicModule,
        TranslateModule.forChild(),
    ],
    declarations: [NegozioModalPage]
})
export class NegozioModalPageModule {
}
