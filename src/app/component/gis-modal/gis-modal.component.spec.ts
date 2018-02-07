import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GisModalComponent } from './gis-modal.component';

describe('GisModalComponent', () => {
  let component: GisModalComponent;
  let fixture: ComponentFixture<GisModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GisModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GisModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
