import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDiplomesComponent } from './liste-diplomes.component';

describe('ListeDiplomesComponent', () => {
  let component: ListeDiplomesComponent;
  let fixture: ComponentFixture<ListeDiplomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeDiplomesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDiplomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
