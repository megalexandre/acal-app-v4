import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSelectCategoryComponent } from './app-select-category.component';

describe('AppSelectCategoryComponent', () => {
  let component: AppSelectCategoryComponent;
  let fixture: ComponentFixture<AppSelectCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSelectCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSelectCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
