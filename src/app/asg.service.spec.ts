import { TestBed } from '@angular/core/testing';

import { AsgService } from './asg.service';

describe('AsgService', () => {
  let service: AsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
