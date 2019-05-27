import { TestBed } from '@angular/core/testing';

import { ScrollsService } from './scrolls.service';

describe('ScrollsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScrollsService = TestBed.get(ScrollsService);
    expect(service).toBeTruthy();
  });
});
