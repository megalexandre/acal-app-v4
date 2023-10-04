import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSelectAreaComponent } from './app-select-area.component';

describe('AppSelectAreaComponent', () => {
  let component: AppSelectAreaComponent;
  let fixture: ComponentFixture<AppSelectAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSelectAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSelectAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
