import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModel, FormsModule } from '@angular/forms';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import {Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    RouterModule,
    FormsModule
  ],
  exports:[ ProductsComponent]
})
export class ProductsModule { }
