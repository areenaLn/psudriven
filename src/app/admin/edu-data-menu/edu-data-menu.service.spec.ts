import { TestBed } from '@angular/core/testing';

import { EduDataMenuService } from './edu-data-menu.service';

describe('EduDataMenuService', () => {
  let service: EduDataMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EduDataMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
