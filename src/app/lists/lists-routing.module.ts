import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ShoplistComponent} from "./components/shoplist/shoplist.component";
import {SearchProductsComponent} from "./components/search-products/search-products.component";
import {ListsPage} from "./lists.page";
import {ShoplistModalComponent} from "./components/shoplist-modal/shoplist-modal.component";

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
        component: ShoplistComponent
      },
      {
        path: 'search',
        // SMART Component
        component: SearchProductsComponent
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListsPageRoutingModule {}
