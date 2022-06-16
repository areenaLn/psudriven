import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolLearnningComponent } from './tool-learnning.component';

describe('ToolLearnningComponent', () => {
  let component: ToolLearnningComponent;
  let fixture: ComponentFixture<ToolLearnningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolLearnningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolLearnningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
