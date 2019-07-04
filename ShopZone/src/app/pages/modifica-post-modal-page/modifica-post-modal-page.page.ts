import { Component, OnInit} from '@angular/core';
import { ModalController} from '@ionic/angular';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-modifica-post-modal-page',
  templateUrl: './modifica-post-modal-page.page.html',
  styleUrls: ['./modifica-post-modal-page.page.scss'],
})
export class ModificaPostModalPagePage implements OnInit {
  private modificaPostFormModel: FormGroup;

  constructor(private modalController: ModalController) {}
    async close() {
      await this.modalController.dismiss();
    }

    /*
  // valore passato in componentProps
  @Input() value: number;
  constructor(navParams: NavParams) { }
    // i componentProps possono essere acceduti a tempo di compilazione usando navParams
*/
    ngOnInit() {}

}
