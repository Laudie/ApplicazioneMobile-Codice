import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.page.html',
  styleUrls: ['./dettaglio.page.scss'],
})
export class DettaglioPage implements OnInit {
  id;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
