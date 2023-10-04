import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { CustomerCreateComponent } from '../../customer/customer-create/customer-create.component';
import { CustomerService } from '../../customer/customer.service';

describe('CustomerCreateComponent', ()=>{
  let component: CustomerCreateComponent;
  let fixture: ComponentFixture<CustomerCreateComponent>;
  let formBuilder: FormBuilder;
  let service: CustomerService;
  let toastrService: NbToastrService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerCreateComponent],
      imports: [FormsModule, ReactiveFormsModule, Router],
      providers: [
        FormBuilder,
        CustomerService,
        NbToastrService,
        { provide: ActivatedRoute, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(CustomerCreateComponent)
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);
    service = TestBed.inject(CustomerService);
    toastrService = TestBed.inject(NbToastrService);
    fixture.detectChanges()
  })

  it(`#${CustomerCreateComponent.name} should be created`,()=>{
    expect(component).toBeTruthy()
  })

})



