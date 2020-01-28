import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotiziaDettaglioPage } from './notizia-dettaglio.page';

describe('NotiziaDettaglioPage', () => {
  let component: NotiziaDettaglioPage;
  let fixture: ComponentFixture<NotiziaDettaglioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotiziaDettaglioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotiziaDettaglioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
