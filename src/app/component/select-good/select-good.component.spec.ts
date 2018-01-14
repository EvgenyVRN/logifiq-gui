import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectGoodComponent } from './select-good.component';

describe('SelectGoodComponent', () => {
  let component: SelectGoodComponent;
  let fixture: ComponentFixture<SelectGoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectGoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectGoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
