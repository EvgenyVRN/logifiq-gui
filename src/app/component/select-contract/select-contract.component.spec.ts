import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectContractComponent } from './select-contract.component';

describe('SelectContractComponent', () => {
  let component: SelectContractComponent;
  let fixture: ComponentFixture<SelectContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
