import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegozioDettaglioPage } from './negozio-dettaglio.page';

describe('NegozioDettaglioPage', () => {
  let component: NegozioDettaglioPage;
  let fixture: ComponentFixture<NegozioDettaglioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegozioDettaglioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegozioDettaglioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
