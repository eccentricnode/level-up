import { TestBed } from '@angular/core/testing';

import { Scroll.ModelService } from './scroll.model.service';

describe('Scroll.ModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Scroll.ModelService = TestBed.get(Scroll.ModelService);
    expect(service).toBeTruthy();
  });
});
