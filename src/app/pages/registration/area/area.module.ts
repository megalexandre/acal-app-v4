import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbFormFieldModule, NbIconModule, NbInputModule, NbSpinnerModule } from '@nebular/theme';
import { AcalModule } from 'app/@acal/acal.module';
import { AppComponentModule } from 'app/@app-component/app-component.module';
import { DirectiveModule } from 'app/@directive/directive.module';
import { PipeModule } from 'app/@pipe/pipe.module';
import { ComponentModule } from 'app/component/component.module';
import { NgxMaskModule } from 'ngx-mask';
import { AreaCreateComponent } from './area-create/area-create.component';
import { AreaDeleteComponent } from './area-delete/area-delete.component';
import { AreaEditComponent } from './area-edit/area-edit.component';
import { AreaPaginateComponent } from './area-paginate/area-paginate.component';
import { AreaRoutingModule } from './area-routing.module';
import { AreaComponent } from './area.component';
import { AreaService } from './area.service';

@NgModule({
  imports: [
    CommonModule,
    AreaRoutingModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    AcalModule,
    NbSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    NbIconModule,
    PipeModule,
    NbFormFieldModule,
    ComponentModule,
    NbCheckboxModule,
    NgxMaskModule.forChild(),
    DirectiveModule,
    AppComponentModule,
  ],
  declarations: [
    AreaComponent,
    AreaCreateComponent,
    AreaPaginateComponent,
    AreaEditComponent,
    AreaDeleteComponent,
  ],
  providers: [
    AreaService,
  ]
})
export class AreaModule { }
