import { TestBed } from '@angular/core/testing';

import { DongABankServiceService } from './dong-abank-service.service';

describe('DongABankServiceService', () => {
  let service: DongABankServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DongABankServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
