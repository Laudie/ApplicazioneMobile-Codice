import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificaPostModalPagePage } from './modifica-post-modal-page.page';



@NgModule({
  entryComponents: [ModificaPostModalPagePage],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule
  ],
  declarations: [ModificaPostModalPagePage],
  exports: [ModificaPostModalPagePage]
})
export class ModificaPostModalPagePageModule {}
