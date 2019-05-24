import { TestBed } from '@angular/core/testing';

import { BurgersService } from './burgers.service';

describe('BurgersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BurgersService = TestBed.get(BurgersService);
    expect(service).toBeTruthy();
  });
});
