import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';

const routes: Routes = [
   { path: 'homepage', component: FormComponent }
];

@NgModule({
  exports: [RouterModule]
})
export class AppRoutingModule { }
