import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListsPageRoutingModule } from './lists-routing.module';

import { ListsPage } from './lists.page';
import {ListCardComponent} from "./components/list-card/list-card.component";
import {ShoplistComponent} from "./components/shoplist/shoplist.component";
import {SearchProductsComponent} from "./components/search-products/search-products.component";
import {ProductResolverService} from "../services/resolvers/product-resolver.service";
import {SharePopoverComponent} from "./components/share-popover/share-popover.component";
import {CreateCardPopoverComponent} from "./components/create-card-popover/create-card-popover.component";

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      ListsPageRoutingModule,
  ],
  declarations: [
      ListsPage,
      ListCardComponent,
      ShoplistComponent,
      SearchProductsComponent,
      SharePopoverComponent,
      CreateCardPopoverComponent
  ],
    providers: [ ProductResolverService ],
    entryComponents: [
        SharePopoverComponent,
        CreateCardPopoverComponent
    ]
})
export class ListsPageModule {}
