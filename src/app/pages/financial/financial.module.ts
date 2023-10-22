import { NgModule } from '@angular/core';
import { FinancialComponent } from './financial.component';
import { FinancialRoutingModule } from './financial-routing.module';

@NgModule({
  imports: [
    FinancialRoutingModule,
  ],
  declarations: [
    FinancialComponent,
  ],
})
export class FinancialModule { }
