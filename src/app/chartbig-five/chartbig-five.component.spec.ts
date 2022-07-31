import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartbigFiveComponent } from './chartbig-five.component';

describe('ChartbigFiveComponent', () => {
  let component: ChartbigFiveComponent;
  let fixture: ComponentFixture<ChartbigFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartbigFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartbigFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
