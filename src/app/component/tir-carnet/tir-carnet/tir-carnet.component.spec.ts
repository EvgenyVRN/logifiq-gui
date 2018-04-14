import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TirCarnetComponent } from './tir-carnet.component';

describe('TirCarnetComponent', () => {
  let component: TirCarnetComponent;
  let fixture: ComponentFixture<TirCarnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TirCarnetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TirCarnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
