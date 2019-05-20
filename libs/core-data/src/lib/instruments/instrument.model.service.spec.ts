import { TestBed } from '@angular/core/testing';

import { Instrument.ModelService } from './instrument.model.service';

describe('Instrument.ModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Instrument.ModelService = TestBed.get(Instrument.ModelService);
    expect(service).toBeTruthy();
  });
});
