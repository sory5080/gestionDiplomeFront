import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalResultatComponent } from './modal-resultat.component';

describe('ModalResultatComponent', () => {
  let component: ModalResultatComponent;
  let fixture: ComponentFixture<ModalResultatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalResultatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalResultatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
