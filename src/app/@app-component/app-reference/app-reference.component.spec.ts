import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppReferenceComponent } from './app-reference.component';

describe('AppReferenceComponent', () => {
  let component: AppReferenceComponent;
  let fixture: ComponentFixture<AppReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppReferenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
