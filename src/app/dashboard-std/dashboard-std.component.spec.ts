import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStdComponent } from './dashboard-std.component';

describe('DashboardStdComponent', () => {
  let component: DashboardStdComponent;
  let fixture: ComponentFixture<DashboardStdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardStdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardStdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
