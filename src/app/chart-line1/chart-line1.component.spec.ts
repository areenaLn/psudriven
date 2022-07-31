import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartLine1Component } from './chart-line1.component';

describe('ChartLine1Component', () => {
  let component: ChartLine1Component;
  let fixture: ComponentFixture<ChartLine1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartLine1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartLine1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
