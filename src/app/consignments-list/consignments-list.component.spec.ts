import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignmentsListComponent } from './consignments-list.component';

describe('ConsignmentsListComponent', () => {
  let component: ConsignmentsListComponent;
  let fixture: ComponentFixture<ConsignmentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsignmentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsignmentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
