import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartStdEduComponent } from './chart-std-edu.component';

describe('ChartStdEduComponent', () => {
  let component: ChartStdEduComponent;
  let fixture: ComponentFixture<ChartStdEduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartStdEduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartStdEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
