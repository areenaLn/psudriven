import { TestBed } from '@angular/core/testing';

import { EduFormService } from './edu-form.service';

describe('EduFormService', () => {
  let service: EduFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EduFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
