import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TirCarnetListComponent } from './tir-carnet-list.component';

describe('TirCarnetListComponent', () => {
  let component: TirCarnetListComponent;
  let fixture: ComponentFixture<TirCarnetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TirCarnetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TirCarnetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
