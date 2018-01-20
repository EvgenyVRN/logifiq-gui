import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectConsDirectionComponent } from './select-cons-direction.component';

describe('SelectConsDirectionComponent', () => {
  let component: SelectConsDirectionComponent;
  let fixture: ComponentFixture<SelectConsDirectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectConsDirectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectConsDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
