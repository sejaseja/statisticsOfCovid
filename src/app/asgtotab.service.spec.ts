import { TestBed } from '@angular/core/testing';

import { AsgtotabService } from './asgtotab.service';

describe('AsgtotabService', () => {
  let service: AsgtotabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsgtotabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
