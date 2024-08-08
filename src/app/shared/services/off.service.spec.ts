import { TestBed } from '@angular/core/testing';

import { OffService } from './off.service';

describe('OffService', () => {
  let service: OffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
