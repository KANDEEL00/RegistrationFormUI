import { TestBed } from '@angular/core/testing';

import { GovernateService } from './governate.service';

describe('GovernateService', () => {
  let service: GovernateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GovernateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
