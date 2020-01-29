import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [EmployeeComponent, CreateComponent, UpdateComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ToastModule
  ]
})
export class EmployeeModule { }
