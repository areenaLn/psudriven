import { TestBed } from '@angular/core/testing';

import { LecPart2Service } from './lec-part2.service';

describe('LecPart2Service', () => {
  let service: LecPart2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LecPart2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
