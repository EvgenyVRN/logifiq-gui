import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectGenericComponent } from './select-generic.component';

describe('SelectGenericComponent', () => {
  let component: SelectGenericComponent;
  let fixture: ComponentFixture<SelectGenericComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectGenericComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
