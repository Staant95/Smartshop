import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateShoplistModalPage } from './create-shoplist-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CreateShoplistModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateShoplistModalPageRoutingModule {}
