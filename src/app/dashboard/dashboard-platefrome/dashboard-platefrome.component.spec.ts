import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPlatefromeComponent } from './dashboard-platefrome.component';

describe('DashboardPlatefromeComponent', () => {
  let component: DashboardPlatefromeComponent;
  let fixture: ComponentFixture<DashboardPlatefromeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPlatefromeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPlatefromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
