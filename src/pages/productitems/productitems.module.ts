import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductitemsPage } from './productitems';

@NgModule({
  declarations: [
    ProductitemsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductitemsPage),
  ],
})
export class ProductitemsPageModule {}
