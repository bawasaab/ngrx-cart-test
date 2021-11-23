import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'products',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'products',
        loadChildren: () => import('./pages/product/product.module').then( module => module.ProductModule )
      },
      {
        path: 'cart',
        loadChildren: () => import('./pages/cart/cart.module').then( module => module.CartModule )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
