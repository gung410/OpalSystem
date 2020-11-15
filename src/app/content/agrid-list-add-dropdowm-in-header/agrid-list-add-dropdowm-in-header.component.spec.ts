import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgridListAddDropdowmInHeaderComponent } from './agrid-list-add-dropdowm-in-header.component';

describe('AgridListAddDropdowmInHeaderComponent', () => {
  let component: AgridListAddDropdowmInHeaderComponent;
  let fixture: ComponentFixture<AgridListAddDropdowmInHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgridListAddDropdowmInHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgridListAddDropdowmInHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
