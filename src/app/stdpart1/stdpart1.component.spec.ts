import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stdpart1Component } from './stdpart1.component';

describe('Stdpart1Component', () => {
  let component: Stdpart1Component;
  let fixture: ComponentFixture<Stdpart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stdpart1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Stdpart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
