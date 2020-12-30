import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMapFilterReduceComponent } from './test-map-filter-reduce.component';

describe('TestMapFilterReduceComponent', () => {
  let component: TestMapFilterReduceComponent;
  let fixture: ComponentFixture<TestMapFilterReduceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMapFilterReduceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMapFilterReduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
