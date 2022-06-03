import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecPart3Component } from './lec-part3.component';

describe('LecPart3Component', () => {
  let component: LecPart3Component;
  let fixture: ComponentFixture<LecPart3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LecPart3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LecPart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
