import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartStdLevelComponent } from './chart-std-level.component';

describe('ChartStdLevelComponent', () => {
  let component: ChartStdLevelComponent;
  let fixture: ComponentFixture<ChartStdLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartStdLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartStdLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
