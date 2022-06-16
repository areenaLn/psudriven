import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStdFormComponent } from './edit-std-form.component';

describe('EditStdFormComponent', () => {
  let component: EditStdFormComponent;
  let fixture: ComponentFixture<EditStdFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStdFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
