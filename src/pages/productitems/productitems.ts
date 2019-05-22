import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { ProductPage} from '../product/product';
import {ViewPage} from '../view/view';
import { AddqtyPage} from '../addqty/addqty';
import {AdddiscountPage} from '../adddiscount/adddiscount';
import * as _ from 'lodash';
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@IonicPage()
@Component({
  selector: 'page-productitems',
  templateUrl: 'productitems.html',
})
export class ProductitemsPage {

  calculate:any = 0;
  addObjects:any =[];
  addedobje:any;
  price:any=0;
  amount:any=0;

  productitems:any 
  item:any
  viewname:any
  vatamount:any = 0
  vat:any =0
  total:any = 0
  addeditems:any
  

  value:any

  checkboxtofalse:any

  checkarrayone:any

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider, public alertCtrl: AlertController) {
 
    // console.log("items", this.productitems)
    this.item = navParams.get('item')
    console.log("item", this.item.id)
    console.log("name", this.item.name)

    this.addeditems = navParams.get('addeditems')
    console.log("sec item added", this.addeditems )

    if (this.addeditems != undefined){

      for (var i in this.addeditems ){

        this.calculate = this.calculate + parseFloat(this.addeditems[i].amount)
      //price to display to the view and format
      this.amount = parseFloat(this.calculate).toFixed(2)
      console.log("total is", this.calculate)

      }


      

    }

    /////////////////////////////////////////////////////////
    ///loop array values for price

 






    this.viewname = this.item.name 

    this.api.getProducts(this.item.id).subscribe(DATA=>{
      console.log("testing", DATA)
      this.productitems = DATA
    })


  } 




  // // //checked item
  // selected(productitem){
  //   console.log('product', productitem)


  //        if (productitem.checked == true) {

  //       console.log("add") 

  //         }

  //         else{

  //          console.log("add") 
            
  //         }

   
  // }
 



  // checked item
  selected(productitem){



      if (productitem.checked == true) {
   
        console.log("object", productitem)

/////////////////////////////////////////////////////////////
////                  if object not added             //////
////////////////////////////////////////////////////////////

        if (this.addeditems != undefined) {
      

console.log(productitem);
console.log(this.addeditems);

          var checkarray = _.some(this.addeditems, productitem)
          console.log(checkarray);

          this.checkarrayone = checkarray


          if (checkarray === true){

            this.checkboxtofalse = productitem.checked = false

            const alert = this.alertCtrl.create({
              title: 'Exist',
              subTitle: 'Already added',
              buttons: ['OK']
            });
            alert.present();
            
          }
          
          else{

            //formula to calculate added items
            this.calculate = this.calculate + parseFloat(productitem.amount)
            //price to display to the view and format
            this.amount = parseFloat(this.calculate).toFixed(2)
            console.log("total is", this.calculate)
            this.total = this.calculate
            console.log("total", this.total)
            //
            this.addeditems.push(productitem)
            this.addObjects = this.addeditems
            console.log("Second value added", this.addeditems)

            this.addedobje = this.addObjects 

            console.log("if needed to remove this objects", this.addeditems)
   
          }

        }

        else {

          console.log("object", productitem)
          //formula to calculate added items
          this.calculate = this.calculate + parseFloat(productitem.amount)
          //price to display to the view and format
          this.amount = parseFloat(this.calculate).toFixed(2)
          console.log("total is", this.calculate)
          this.total = this.calculate
          console.log("total", this.total)
          this.addedobje = this.addObjects
          this.addedobje.push(productitem)
          console.log("new values going to be added", this.addedobje)

        }
      }

/////////////////////////////////////////////////////////////
////                  else object not added            //////
////////////////////////////////////////////////////////////
      else {

        console.log(productitem);
        console.log(this.addeditems);

        if(this.addeditems == undefined){

          //original object
          console.log("Items", this.addObjects);
          this.addObjects.splice(productitem, 1)
          //left objects after removing. 
          console.log("removed", this.addObjects)
          //total after removing object
          this.calculate = this.calculate - parseFloat(productitem.amount)
          console.log("calculate", this.calculate)

          //total
          this.total = this.calculate
          console.log("total", this.total)

          //price to display to the view and format
          this.amount = parseFloat(this.calculate).toFixed(2)

        }
        else{

          var arrayexist = _.some(this.addeditems, productitem)
          console.log("true", arrayexist);

          if (arrayexist == false) {
            console.log("remove")
          }
          else {
            //original object
            console.log("Items", this.addObjects);
            this.addObjects.splice(productitem, 1)
            //left objects after removing. 
            console.log("removed", this.addObjects)
            //total after removing object
            this.calculate = this.calculate - parseFloat(productitem.amount)
            console.log("calculate", this.calculate)
            //total
            this.total = this.calculate
            console.log("total", this.total)
            //price to display to the view and format
            this.amount = parseFloat(this.calculate).toFixed(2)
          }
        }
      }

  }





  addquote(){

    

    console.log("array", this.addedobje) ; 

    this.navCtrl.push(ProductPage,{
      addedItems: this.addedobje
    })
    
  }

  View(){

    this.navCtrl.push(ViewPage,{
      itemcheck: this.addObjects,
      amount: this.amount,
      vat: this.vat,
      total: this.total
    })
    
  }

  qty() {

    console.log("navigate to another page---1")


    // modify an object and add a property inside an array
    for (var iadd = 0; iadd < this.addObjects.length; iadd++) {
      console.log(this.addObjects[iadd]);

      this.addObjects[iadd].quantity = 1
      this.addObjects[iadd].price = this.addObjects[iadd].amount
      this.addObjects[iadd].total = this.addObjects[iadd].amount
    
   

      console.log("hello", this.addObjects)
      console.log("modified", this.addObjects[iadd])
      console.log(this.addObjects)

    }

    if (this.addObjects.length == 0){

      const alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'No Item add please add an item',
        buttons: ['OK']
      });
      alert.present();

    }
    else{

      this.navCtrl.push(AddqtyPage, {
        itemcheck: this.addObjects,
        subtotal: this.amount,
        vat: this.vat,
        total: this.total
      })

    }




  }


  // discount(){

  //   // modify an object and add a property inside an array
  //   for (var iadd = 0; iadd < this.addObjects.length; iadd++) {
  //     console.log(this.addObjects[iadd]);

  //     this.addObjects[iadd].quantity = 1
  //     this.addObjects[iadd].price = this.addObjects[iadd].amount
  //     this.addObjects[iadd].total = this.addObjects[iadd].amount



  //     console.log("hello", this.addObjects)
  //     console.log("modified", this.addObjects[iadd])
  //     console.log(this.addObjects)

  //   }



  //   this.navCtrl.push(AdddiscountPage, {
  //     itemcheck: this.addObjects,
  //     subtotal: this.amount,
  //     vat: this.vat,
  //     total: this.total
  //   })

  // }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductitemsPage');
  }

}
