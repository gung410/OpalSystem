import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateScssSelectTableComponent } from './template-scss-select-table.component';

describe('TemplateScssSelectTableComponent', () => {
  let component: TemplateScssSelectTableComponent;
  let fixture: ComponentFixture<TemplateScssSelectTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateScssSelectTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateScssSelectTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
