import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDeliveryTermsComponent } from './select-delivery-terms.component';

describe('SelectDeliveryTermsComponent', () => {
  let component: SelectDeliveryTermsComponent;
  let fixture: ComponentFixture<SelectDeliveryTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDeliveryTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDeliveryTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
