import { TestBed } from '@angular/core/testing';

import { EditStdFormService } from './edit-std-form.service';

describe('EditStdFormService', () => {
  let service: EditStdFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditStdFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
