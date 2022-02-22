import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from './cart.component';
import { CartManagementComponent } from './cart-management/cart-management.component';
import { CartValidationComponent } from './cart-validation/cart-validation.component';
import { CartDisplayComponent } from './cart-display/cart-display.component';

import { CartService } from './cart.service';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  imports: [CommonModule, CartRoutingModule],
  declarations: [CartComponent, CartManagementComponent, CartValidationComponent, CartDisplayComponent],
  exports: [CartComponent],
  providers: [CartService],
  bootstrap: [CartComponent]
})
export class CartModule { }
