import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartStdMediaComponent } from './chart-std-media.component';

describe('ChartStdMediaComponent', () => {
  let component: ChartStdMediaComponent;
  let fixture: ComponentFixture<ChartStdMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartStdMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartStdMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
