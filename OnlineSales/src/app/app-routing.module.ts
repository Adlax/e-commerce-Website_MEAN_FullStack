import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResearchComponent } from './research/research.component';
import { CartComponent } from './cart/cart.component';

import { CartModule } from './cart/cart.module';
import { ResearchModule } from './research/research.module';

const routes: Routes = [
  {
    path: 'research',
    loadChildren: () => import('./research/research.module').then(m=>m.ResearchModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(m=>m.CartModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
