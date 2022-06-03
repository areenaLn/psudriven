import { TestBed } from '@angular/core/testing';

import { Stdpart4Service } from './stdpart4.service';

describe('Stdpart4Service', () => {
  let service: Stdpart4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Stdpart4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
