import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProductitemsPage} from '../productitems/productitems';
import { ApiProvider } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  products:any
  addedItems:any

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider) {
  
    this.api.getCategories().subscribe(DATA => {
      console.log("data", DATA)
      this.products = DATA
    })

    this.addedItems = navParams.get('addedItems')
    console.log("inside", this.addedItems)

  }     

  productitems(product){


    console.log("added ", this.addedItems)

 

    console.log("object", product)
    
    this.api.getSubCategory(product.id).subscribe(DATA =>{
      console.log("data",DATA)


      
      if (DATA.length === 0){
        console.log("direct to another page", this.addedItems)
        this.navCtrl.push(ProductitemsPage,{
          item: product,
          addeditems:this.addedItems
        })
      }else{
        this.products = DATA
        console.log("Add more data", this.products)

      }
    })
    // this.navCtrl.push(ProductitemsPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

}
