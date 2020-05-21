import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListsPageRoutingModule } from './lists-routing.module';

import { ListsPage } from './lists.page';
import {ListCardComponent} from "./components/list-card/list-card.component";
import {ShoplistComponent} from "./components/shoplist/shoplist.component";
import {SearchProductsComponent} from "./components/search-products/search-products.component";
import {ShoplistModalComponent} from "./components/shoplist-modal/shoplist-modal.component";

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      ListsPageRoutingModule,
  ],
  declarations: [ListsPage, ListCardComponent, ShoplistComponent, SearchProductsComponent, ShoplistModalComponent],
})
export class ListsPageModule {}
