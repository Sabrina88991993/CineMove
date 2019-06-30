import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModel, FormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import {Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    RouterModule,
    FormsModule
  ],
  exports:[ RegisterComponent]
})
export class RegisterModule { }
