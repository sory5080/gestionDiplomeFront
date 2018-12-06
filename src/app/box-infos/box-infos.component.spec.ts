import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxInfosComponent } from './box-infos.component';

describe('BoxInfosComponent', () => {
  let component: BoxInfosComponent;
  let fixture: ComponentFixture<BoxInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
