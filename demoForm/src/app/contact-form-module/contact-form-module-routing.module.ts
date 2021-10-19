import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormModuleComponent } from './contact-form-module.component';

const routes: Routes = [{ path: '', component: ContactFormModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactFormModuleRoutingModule { }
