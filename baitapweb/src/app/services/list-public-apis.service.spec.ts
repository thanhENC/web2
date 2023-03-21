import { TestBed } from '@angular/core/testing';

import { ListPublicAPIsService } from './list-public-apis.service';

describe('ListPublicAPIsService', () => {
  let service: ListPublicAPIsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListPublicAPIsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
