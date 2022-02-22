import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartDisplayComponent } from './cart-display/cart-display.component';
import { CartManagementComponent } from './cart-management/cart-management.component';
import { CartValidationComponent } from './cart-validation/cart-validation.component';

const routes: Routes = [
  {
    path: 'management/:action/:id/:numAction',
    component: CartManagementComponent,
    outlet: 'cartManagement'
  },
  {
    path: 'validation',
    component: CartValidationComponent,
    outlet: 'cartValidation'
  },
  {
    path: 'display/:numAction',
    component: CartDisplayComponent,
    outlet: 'cartDisplay'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {

}
