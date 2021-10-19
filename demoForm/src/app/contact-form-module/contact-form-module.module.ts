import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactFormModuleRoutingModule } from './contact-form-module-routing.module';
import { ContactFormModuleComponent } from './contact-form-module.component';


@NgModule({
  declarations: [
    ContactFormModuleComponent
  ],
  imports: [
    CommonModule,
    ContactFormModuleRoutingModule
  ]
})
export class ContactFormModuleModule { }
