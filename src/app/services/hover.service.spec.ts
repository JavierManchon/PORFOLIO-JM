import { TestBed } from '@angular/core/testing';

import { HoverService } from './hover.service';

describe('HoverService', () => {
  let service: HoverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
