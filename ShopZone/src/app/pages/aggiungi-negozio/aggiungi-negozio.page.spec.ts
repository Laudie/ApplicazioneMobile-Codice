import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiNegozioPage } from './aggiungi-negozio.page';

describe('AggiungiNegozioPage', () => {
  let component: AggiungiNegozioPage;
  let fixture: ComponentFixture<AggiungiNegozioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AggiungiNegozioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AggiungiNegozioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
