import { Component, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '@model/default/category';
import { Customer } from '@model/default/customer';
import { NbTabComponent, NbTabsetComponent, NbToastrService } from '@nebular/theme';
import { Address } from 'cluster';
import { LinkService } from '../link.service';

@Component({
  templateUrl: './link-create.component.html',
  styles: [`
    :host nb-tab {
      padding: 1.25rem;
    }
  `],
})
export class LinkCreateComponent {

  @ViewChild("createlink") tabsetEl: NbTabsetComponent;
  @ViewChild("customer") customerTab: NbTabComponent;
  @ViewChild("category") categoryTab: NbTabComponent;
  @ViewChild("address") addressTab: NbTabComponent;
  @ViewChild("review") reviewTab: NbTabComponent;

  public title: String = "Nova Ligação";
  public submmited: boolean = false;
  public form: FormGroup;

  public disabledCustomerButton = true;

  constructor(
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public service: LinkService,
    public toastrService: NbToastrService,
    ) {

    this.createForms()

  }

  renderButtons(){
    this.disabledCustomerButton = this.customer.invalid;
  }

  createForms(): void {

    this.form = this.formBuilder.group({
      category: [null, Validators.required],
      address: [null, Validators.required],
      addressMail: [null, Validators.required],
      customer: [null, Validators.required],
      createdBy: ['alexandre', Validators.required],
    })

  }

  toCategoryTab(){
    this.customerTab.disabled = true;
    this.categoryTab.disabled = false;
    this.tabsetEl.selectTab(this.categoryTab)
  }

  toAddressTab(){
    this.categoryTab.disabled = true;
    this.addressTab.disabled = false;
    this.tabsetEl.selectTab(this.addressTab)
  }

  toReviewTab(){
    this.addressTab.disabled = true;
    this.reviewTab.disabled = false;
    this.tabsetEl.selectTab(this.reviewTab)
  }

  setCustomer(customer: Customer | null){
    this.customer.setValue(customer)
  }

  setCategory(category: Category | null){
    this.category.setValue(category)
  }

  setAddress(address: Address | null){
    this.address.setValue(address)
  }

  get customer(): AbstractControl {
    return this.form.get('customer')
  }

  get category(): AbstractControl {
    return this.form.get('category')
  }

  get address(): AbstractControl {
    return this.form.get('address')
  }

}
