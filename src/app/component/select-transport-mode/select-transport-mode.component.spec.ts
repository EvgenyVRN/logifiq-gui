import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTransportModeComponent } from './select-transport-mode.component';

describe('SelectTransportModeComponent', () => {
  let component: SelectTransportModeComponent;
  let fixture: ComponentFixture<SelectTransportModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectTransportModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTransportModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
