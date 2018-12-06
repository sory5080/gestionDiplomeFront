import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEtablissementComponent } from './gestion-etablissement.component';

describe('GestionEtablissementComponent', () => {
  let component: GestionEtablissementComponent;
  let fixture: ComponentFixture<GestionEtablissementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionEtablissementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionEtablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
