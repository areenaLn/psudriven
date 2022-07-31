import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDataMainComponent } from './post-data-main.component';

describe('PostDataMainComponent', () => {
  let component: PostDataMainComponent;
  let fixture: ComponentFixture<PostDataMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDataMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDataMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
