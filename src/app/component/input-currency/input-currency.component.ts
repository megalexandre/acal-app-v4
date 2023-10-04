import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngx-input-currency',
  templateUrl: './input-currency.component.html',
})
export class InputCurrencyComponent {

  @Input()
  public status: string = 'basic';

  @Input()
  public currency?: number = null;

  @Input()
  public disabled: boolean = false;

  @Output()
  public currencyChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  public emit(){

    if (!this.currency) {
      this.currencyChange.emit(null);
    } else {
      const exportCurrency = Number(this.currency).toFixed(2)
      this.currencyChange.emit(exportCurrency)
    }


  }

}
