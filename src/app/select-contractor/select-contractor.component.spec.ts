import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectContractorComponent } from './select-contractor.component';

describe('SelectContractorComponent', () => {
  let component: SelectContractorComponent;
  let fixture: ComponentFixture<SelectContractorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectContractorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectContractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
