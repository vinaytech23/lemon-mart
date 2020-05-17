import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { InventoryDashboardComponent } from './inventory-dashboard/inventory-dashboard.component'
import { StockEntryComponent } from './stock-entry/stock-entry.component'
import { ProductsComponent } from './products/products.component'
import { CategoriesComponent } from './categories/categories.component'
import { InventoryComponent } from './inventory/inventory.component'

const routes: Routes = [
  {path: '',
    component: InventoryComponent,
    children:[
  { path: '', redirectTo: '/inventory/inventoryDashboard', pathMatch: 'full' },
  { path: 'inventoryDashboard', component: InventoryDashboardComponent },
  { path: 'stockEntry', component: StockEntryComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'categories', component: CategoriesComponent },
]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {}
