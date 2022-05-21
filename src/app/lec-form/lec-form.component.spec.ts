import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecFormComponent } from './lec-form.component';

describe('LecFormComponent', () => {
  let component: LecFormComponent;
  let fixture: ComponentFixture<LecFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LecFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LecFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
