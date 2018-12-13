import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthDiplomeComponent } from './auth-diplome.component';

describe('AuthDiplomeComponent', () => {
  let component: AuthDiplomeComponent;
  let fixture: ComponentFixture<AuthDiplomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthDiplomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthDiplomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
