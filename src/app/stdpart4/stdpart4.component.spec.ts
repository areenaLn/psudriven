import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stdpart4Component } from './stdpart4.component';

describe('Stdpart4Component', () => {
  let component: Stdpart4Component;
  let fixture: ComponentFixture<Stdpart4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stdpart4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Stdpart4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
