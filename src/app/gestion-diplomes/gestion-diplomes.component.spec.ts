import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDiplomesComponent } from './gestion-diplomes.component';

describe('GestionDiplomesComponent', () => {
  let component: GestionDiplomesComponent;
  let fixture: ComponentFixture<GestionDiplomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionDiplomesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDiplomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
