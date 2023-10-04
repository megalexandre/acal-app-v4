import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSelectAddressComponent } from './app-select-address.component';

describe('AppSelectAddressComponent', () => {
  let component: AppSelectAddressComponent;
  let fixture: ComponentFixture<AppSelectAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSelectAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSelectAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
