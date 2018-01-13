import { TestBed, inject } from '@angular/core/testing';

import { CustomsService } from './customs.service';

describe('CustomsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomsService]
    });
  });

  it('should be created', inject([CustomsService], (service: CustomsService) => {
    expect(service).toBeTruthy();
  }));
});
