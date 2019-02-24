import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteresListaComponent } from './interes-lista.component';

describe('InteresListaComponent', () => {
  let component: InteresListaComponent;
  let fixture: ComponentFixture<InteresListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteresListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteresListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
