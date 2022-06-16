import { TestBed } from '@angular/core/testing';

import { EditLecFormService } from './edit-lec-form.service';

describe('EditLecFormService', () => {
  let service: EditLecFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditLecFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
