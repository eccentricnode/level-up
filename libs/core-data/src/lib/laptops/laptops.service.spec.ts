import { TestBed } from '@angular/core/testing';

import { LaptopsService } from './laptops.service';

describe('LaptopsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LaptopsService = TestBed.get(LaptopsService);
    expect(service).toBeTruthy();
  });
});
