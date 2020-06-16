import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ShoplistComponent} from "./components/shoplist/shoplist.component";
import {SearchProductsComponent} from "./components/search-products/search-products.component";
import {ListsPage} from "./lists.page";

const routes: Routes = [
  {
    // l'url e' /tabs/lists
    path: '',
    // SMART Component
    component: ListsPage
  },
  {
    // l'ulr e' /tabs/lists/:id
    path: ':id',
    children: [
      {
        path: '',
        // SMART Component
        component: ShoplistComponent,
        // resolve: {
        //   products: ProductResolverService
        // }
      },
      {
        path: 'search',
        component: SearchProductsComponent
      }
    ],
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListsPageRoutingModule {}
