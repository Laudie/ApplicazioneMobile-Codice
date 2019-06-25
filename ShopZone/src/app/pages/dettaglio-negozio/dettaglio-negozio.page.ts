import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dettaglio-negozio',
  templateUrl: './dettaglio-negozio.page.html',
  styleUrls: ['./dettaglio-negozio.page.scss'],
})
export class DettaglioNegozioPage implements OnInit {
  public number: number = null;
id;

call() {
  if ( this.number !== null ) {
    this.number = null;
  } else {
    this.number = 3478902938;
  }
}
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
