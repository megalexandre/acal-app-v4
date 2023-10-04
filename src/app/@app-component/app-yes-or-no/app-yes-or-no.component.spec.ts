import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppYesOrNoComponent } from './app-yes-or-no.component';

describe('AppYesOrNoComponent', () => {
  let component: AppYesOrNoComponent;
  let fixture: ComponentFixture<AppYesOrNoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppYesOrNoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppYesOrNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
