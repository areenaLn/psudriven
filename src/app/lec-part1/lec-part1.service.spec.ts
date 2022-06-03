import { TestBed } from '@angular/core/testing';

import { LecPart1Service } from './lec-part1.service';

describe('LecPart1Service', () => {
  let service: LecPart1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LecPart1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
