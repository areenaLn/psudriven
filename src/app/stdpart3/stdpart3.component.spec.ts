import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stdpart3Component } from './stdpart3.component';

describe('Stdpart3Component', () => {
  let component: Stdpart3Component;
  let fixture: ComponentFixture<Stdpart3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stdpart3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Stdpart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
