import { TestBed } from '@angular/core/testing';

import { MmosService } from './mmos.service';

describe('MmosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MmosService = TestBed.get(MmosService);
    expect(service).toBeTruthy();
  });
});
