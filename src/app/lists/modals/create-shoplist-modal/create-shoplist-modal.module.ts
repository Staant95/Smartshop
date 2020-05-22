import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateShoplistModalPageRoutingModule } from './create-shoplist-modal-routing.module';

import { CreateShoplistModalPage } from './create-shoplist-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateShoplistModalPageRoutingModule
  ],
  declarations: [CreateShoplistModalPage]
})
export class CreateShoplistModalPageModule {}
