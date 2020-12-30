import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDialogPopupComponent } from './show-dialog-popup.component';

describe('ShowDialogPopupComponent', () => {
  let component: ShowDialogPopupComponent;
  let fixture: ComponentFixture<ShowDialogPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDialogPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDialogPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
