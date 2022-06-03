import { TestBed } from '@angular/core/testing';

import { Stdpart1Service } from './stdpart1.service';

describe('Stdpart1Service', () => {
  let service: Stdpart1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Stdpart1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
