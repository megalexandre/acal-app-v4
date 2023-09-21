import { NgModule } from '@angular/core';
import { ValidInputDirective } from './valid-input.directive';

@NgModule({

  declarations: [
    ValidInputDirective
  ],

  exports: [
    ValidInputDirective
  ]

})

export class DirectiveModule { }
