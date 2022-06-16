import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduDataMenuComponent } from './edu-data-menu.component';

describe('EduDataMenuComponent', () => {
  let component: EduDataMenuComponent;
  let fixture: ComponentFixture<EduDataMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EduDataMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EduDataMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
