import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioPage } from './dettaglio.page';

describe('DettaglioPage', () => {
  let component: DettaglioPage;
  let fixture: ComponentFixture<DettaglioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettaglioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
