import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecPart2Component } from './lec-part2.component';

describe('LecPart2Component', () => {
  let component: LecPart2Component;
  let fixture: ComponentFixture<LecPart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LecPart2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LecPart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
