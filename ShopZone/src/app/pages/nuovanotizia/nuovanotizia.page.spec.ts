import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovanotiziaPage } from './nuovanotizia.page';

describe('NuovanotiziaPage', () => {
  let component: NuovanotiziaPage;
  let fixture: ComponentFixture<NuovanotiziaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuovanotiziaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuovanotiziaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
