import { TestBed } from '@angular/core/testing';

import { Dota2Service } from './dota2.service';

describe('Dota2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Dota2Service = TestBed.get(Dota2Service);
    expect(service).toBeTruthy();
  });
});
