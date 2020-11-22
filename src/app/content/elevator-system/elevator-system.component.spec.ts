import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevatorSystemComponent } from './elevator-system.component';

describe('ElevatorSystemComponent', () => {
  let component: ElevatorSystemComponent;
  let fixture: ComponentFixture<ElevatorSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElevatorSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElevatorSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
