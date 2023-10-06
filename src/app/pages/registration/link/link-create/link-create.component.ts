import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
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

  public currentActiveTab = 0;
  private readonly customerTabIndex: number = 0;
  private readonly categoryTabIndex: number = 1;
  private readonly addressTabIndex: number = 2;
  private readonly reviewTabIndex: number = 3;

  public validCustomerTab = false;
  public validCategoryTab = false;
  public validAddressTab = false;
  public disabledReviewButton = true;

  constructor(
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public service: LinkService,
    public toastrService: NbToastrService,
    ) {

    this.createForms()

  }

  confirm(){
    this.service.save(this.form.value).subscribe(
      () => {
        this.toastrService.success(`Sucesso`, `Novo Registro adicionado`)
        this.router.navigate(['../list'],{relativeTo: this.activatedRoute})
      },
      (response) =>{
        this.toastrService.danger(`Não foi possivel realizar a ação`, response.error.cause,)
      }
    )
  }

  back(){

  }

  renderButtons(){
    this.validCustomerTab = !this.customer.invalid;
    this.validCategoryTab = !this.category.invalid;
    this.validAddressTab = !this.address.invalid;
    this.disabledReviewButton = this.form.invalid;
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
    this.currentActiveTab = this.categoryTabIndex;
  }

  toAddressTab(){
    this.categoryTab.disabled = true;
    this.addressTab.disabled = false;
    this.tabsetEl.selectTab(this.addressTab)
    this.currentActiveTab = this.addressTabIndex;
  }

  toReviewTab(){
    this.addressTab.disabled = true;
    this.reviewTab.disabled = false;
    this.tabsetEl.selectTab(this.reviewTab)
    this.currentActiveTab = this.reviewTabIndex;
  }

  setCustomer(customer: Customer | null){
    this.customer.setValue(customer)
  }

  setCategory(category: Category | null){
    this.category.setValue(category)
  }

  setAddress(address: Address | null){
    this.address.setValue(address)
    this.addressMail.setValue(address)
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

  get addressMail(): AbstractControl {
    return this.form.get('addressMail')
  }

}
