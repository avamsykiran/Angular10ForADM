import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'ItemsList', loadChildren: () => import('./inventory/inventory.module').then(m => m.InventoryModule) }, { path: 'OrdersList', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) }, { path: 'Shopping', loadChildren: () => import('./shopping/shopping.module').then(m => m.ShoppingModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
