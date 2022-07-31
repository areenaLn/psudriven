import { TestBed } from '@angular/core/testing';

import { DashboardStdService } from './dashboard-std.service';

describe('DashboardStdService', () => {
  let service: DashboardStdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardStdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
