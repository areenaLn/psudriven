import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningStyleComponent } from './learning-style.component';

describe('LearningStyleComponent', () => {
  let component: LearningStyleComponent;
  let fixture: ComponentFixture<LearningStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
