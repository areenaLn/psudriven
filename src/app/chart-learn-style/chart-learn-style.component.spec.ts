import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartLearnStyleComponent } from './chart-learn-style.component';

describe('ChartLearnStyleComponent', () => {
  let component: ChartLearnStyleComponent;
  let fixture: ComponentFixture<ChartLearnStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartLearnStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartLearnStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
