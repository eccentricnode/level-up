import { TestBed } from '@angular/core/testing';

import { OperatingSystemsService } from './operating-systems.service';

describe('OperatingSystemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OperatingSystemsService = TestBed.get(OperatingSystemsService);
    expect(service).toBeTruthy();
  });
});
