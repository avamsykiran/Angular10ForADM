import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { ItemFormComponent } from './item-form/item-form.component';


@NgModule({
  declarations: [InventoryComponent, ItemViewComponent, ItemFormComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule
  ]
})
export class InventoryModule { }
