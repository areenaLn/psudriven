import { TestBed } from '@angular/core/testing';

import { Stdpart3Service } from './stdpart3.service';

describe('Stdpart3Service', () => {
  let service: Stdpart3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Stdpart3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
