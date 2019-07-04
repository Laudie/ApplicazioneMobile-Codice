import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaPostModalPagePage } from './modifica-post-modal-page.page';

describe('ModificaPostModalPagePage', () => {
  let component: ModificaPostModalPagePage;
  let fixture: ComponentFixture<ModificaPostModalPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaPostModalPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaPostModalPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
