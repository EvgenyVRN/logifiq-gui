import { TestBed, inject } from '@angular/core/testing';

import { GoodInStockService } from './good-in-stock.service';

describe('GoodInStockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoodInStockService]
    });
  });

  it('should be created', inject([GoodInStockService], (service: GoodInStockService) => {
    expect(service).toBeTruthy();
  }));
});
