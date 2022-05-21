import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stdpart2Component } from './stdpart2.component';

describe('Stdpart2Component', () => {
  let component: Stdpart2Component;
  let fixture: ComponentFixture<Stdpart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stdpart2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Stdpart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
