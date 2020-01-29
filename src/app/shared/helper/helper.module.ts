import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestHelper } from './request.helper';



@NgModule({
  providers: [
    CommonModule,
    RequestHelper
  ]
})
export class HelperModule { }
