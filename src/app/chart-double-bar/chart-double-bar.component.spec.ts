import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDoubleBarComponent } from './chart-double-bar.component';

describe('ChartDoubleBarComponent', () => {
  let component: ChartDoubleBarComponent;
  let fixture: ComponentFixture<ChartDoubleBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartDoubleBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartDoubleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
