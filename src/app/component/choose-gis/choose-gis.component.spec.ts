import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseGisComponent } from './choose-gis.component';

describe('ChooseGisComponent', () => {
  let component: ChooseGisComponent;
  let fixture: ComponentFixture<ChooseGisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseGisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseGisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
