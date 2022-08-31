import { TestBed } from '@angular/core/testing';

import { ProductPlateService } from './product-plate.service';

describe('ProductPlateService', () => {
  let service: ProductPlateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductPlateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
