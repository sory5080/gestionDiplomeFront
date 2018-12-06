import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEtablissementComponent } from './dashboard-etablissement.component';

describe('DashboardEtablissementComponent', () => {
  let component: DashboardEtablissementComponent;
  let fixture: ComponentFixture<DashboardEtablissementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardEtablissementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEtablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
