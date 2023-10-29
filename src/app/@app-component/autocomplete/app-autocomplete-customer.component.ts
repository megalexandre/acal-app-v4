import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { Customer } from 'app/pages/registration/customer/customer.model/customer';
import { CustomerService } from 'app/pages/registration/customer/customer.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-autocomplete-customer',
  templateUrl: './app-autocomplete-customer.component.html',
})
export class AppAutocompleteCustomerComponent {

  customerName: string = "";
  customers: Customer[];
  filteredCustomers$: Observable<Customer[]>;


  constructor(public service: CustomerService){
    
  }

  ngOnInit() {
    this.service.filterAll({name: 'Alexandre'}).subscribe(
      (customers: Customer[])=>{
        this.customers = customers  
      }
    )
    
  }
  
  update(customerName: string){
    
  }



  private filter(value: string): Customer[] {
    const filterValue = value.toLowerCase();
    return this.customers.filter(
      (customer) => customer.name.toLowerCase().includes(filterValue)
    );
  }

  onChange() {
  }

  onSelectionChange($event) {
  }

}

/*
export class AppAutocompleteCustomerComponent {
 
  customers: Customer[] = [];
  filteredCustomers$: Observable<Customer[]>;

  constructor(private optionService: OptionService) {}

  ngOnInit() {
    this.optionService.getCustomers().subscribe((customers) => {
      this.customers = customers;
    });

    this.filteredCustomers$ = this.autoInput.valueChanges.pipe(
      startWith(''), // Começa com uma string vazia
      map((value) => this.filter(value))
    );
  }

  private filter(value: string): Customer[] {
    const filterValue = value.toLowerCase();
    return this.customers.filter(
      (customer) => customer.name.toLowerCase().includes(filterValue)
    );
  }

  onChange() {}

  onSelectionChange(event) {
    // Você pode lidar com a seleção do Customer aqui.
  }
}
*/ 