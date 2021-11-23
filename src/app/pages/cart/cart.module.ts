import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { NgMaterialModule } from 'src/app/shared/ng-material/ng-material.module';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    NgMaterialModule,
    CartRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CartModule { }
