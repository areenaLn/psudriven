import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartOjbComponent } from './chart-ojb.component';

describe('ChartOjbComponent', () => {
  let component: ChartOjbComponent;
  let fixture: ComponentFixture<ChartOjbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartOjbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartOjbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
