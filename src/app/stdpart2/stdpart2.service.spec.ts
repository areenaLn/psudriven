import { TestBed } from '@angular/core/testing';

import { Stdpart2Service } from './stdpart2.service';

describe('Stdpart2Service', () => {
  let service: Stdpart2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Stdpart2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
