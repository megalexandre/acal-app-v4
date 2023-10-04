import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSelectCustomerComponent } from './app-select-customer.component';

describe('AppSelectCustomerComponent', () => {
  let component: AppSelectCustomerComponent;
  let fixture: ComponentFixture<AppSelectCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSelectCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSelectCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
