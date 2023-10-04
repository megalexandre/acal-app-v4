import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCurrencyComponent } from './app-currency.component';

describe('AppCurrencyComponent', () => {
  let component: AppCurrencyComponent;
  let fixture: ComponentFixture<AppCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCurrencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
