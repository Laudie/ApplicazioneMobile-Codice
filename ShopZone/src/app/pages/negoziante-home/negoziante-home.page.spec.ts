import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegozianteHomePage } from './negoziante-home.page';

describe('NegozianteHomePage', () => {
  let component: NegozianteHomePage;
  let fixture: ComponentFixture<NegozianteHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegozianteHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegozianteHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
