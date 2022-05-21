import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecPart1Component } from './lec-part1.component';

describe('LecPart1Component', () => {
  let component: LecPart1Component;
  let fixture: ComponentFixture<LecPart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LecPart1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LecPart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
