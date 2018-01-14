import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectReleaseTermsComponent } from './select-release-terms.component';

describe('SelectReleaseTermsComponent', () => {
  let component: SelectReleaseTermsComponent;
  let fixture: ComponentFixture<SelectReleaseTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectReleaseTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectReleaseTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
