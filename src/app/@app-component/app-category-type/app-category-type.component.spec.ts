import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCategoryTypeComponent } from './app-category-type.component';

describe('AppCategoryTypeComponent', () => {
  let component: AppCategoryTypeComponent;
  let fixture: ComponentFixture<AppCategoryTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCategoryTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCategoryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
