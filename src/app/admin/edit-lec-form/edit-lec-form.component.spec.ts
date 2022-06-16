import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLecFormComponent } from './edit-lec-form.component';

describe('EditLecFormComponent', () => {
  let component: EditLecFormComponent;
  let fixture: ComponentFixture<EditLecFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLecFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLecFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
