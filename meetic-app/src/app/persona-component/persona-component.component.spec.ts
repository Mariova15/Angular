import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaComponentComponent } from './persona-component.component';

describe('PersonaComponentComponent', () => {
  let component: PersonaComponentComponent;
  let fixture: ComponentFixture<PersonaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
