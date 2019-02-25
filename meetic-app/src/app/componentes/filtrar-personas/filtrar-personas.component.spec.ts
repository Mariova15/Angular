import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarPersonasComponent } from './filtrar-personas.component';

describe('FiltrarPersonasComponent', () => {
  let component: FiltrarPersonasComponent;
  let fixture: ComponentFixture<FiltrarPersonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrarPersonasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrarPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
