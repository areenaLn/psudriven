import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCampusComponent } from './chart-campus.component';

describe('ChartCampusComponent', () => {
  let component: ChartCampusComponent;
  let fixture: ComponentFixture<ChartCampusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartCampusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartCampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
