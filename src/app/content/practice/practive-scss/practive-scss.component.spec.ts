import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PractiveScssComponent } from './practive-scss.component';

describe('PractiveScssComponent', () => {
  let component: PractiveScssComponent;
  let fixture: ComponentFixture<PractiveScssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PractiveScssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PractiveScssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
