import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegozioModalPage } from './negozio-modal.page';

describe('NegozioModalPage', () => {
  let component: NegozioModalPage;
  let fixture: ComponentFixture<NegozioModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegozioModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegozioModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
