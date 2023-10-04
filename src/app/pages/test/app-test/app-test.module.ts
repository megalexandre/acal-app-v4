import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponentComponent } from './test-component/test-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponentModule } from 'app/@app-component/app-component.module';
import { TestRoutingModule } from './test-component/test-routing.module';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppComponentModule,
    TestRoutingModule,
  ],

  declarations: [
    TestComponentComponent
  ],

})
export class AppTestModule { }
