import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulateAccountUserListComponent } from './simulate-account-user-list.component';

describe('SimulateAccountUserListComponent', () => {
  let component: SimulateAccountUserListComponent;
  let fixture: ComponentFixture<SimulateAccountUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulateAccountUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulateAccountUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
