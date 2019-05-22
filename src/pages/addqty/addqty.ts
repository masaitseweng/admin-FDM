import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ViewPage} from '../view/view';
import { AdddiscountPage} from '../adddiscount/adddiscount';
// import{InvoicePage} from '../invoice/invoice';
import {OutstandingPage} from '../outstanding/outstanding';
import {ProductPage} from '../product/product';


@IonicPage()
@Component({
  selector: 'page-addqty',
  templateUrl: 'addqty.html',
})
export class AddqtyPage {


  productitems :any
  vat: any = 0
  total: any
  countqty: number = 1;

  subtotal:any

  vatamount: any = 0
  percentage:any




  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,) {
  
    this.productitems = navParams.get('itemcheck')
    console.log("items", this.productitems ) 

    this.subtotal = navParams.get('subtotal')
    console.log("items", this.subtotal) 



  }

  changeadd(item) {

    console.log("items", item)


    if (item.quantity >= 10) {

      console.log("error")

    }
    else {

      item.quantity = item.quantity + 1
      item.amount = item.quantity


      item.amount = item.amount * parseFloat(item.price)


      console.log("total", item.amount)


      console.log("total", this.subtotal)

      //convert to double 
      this.subtotal = parseFloat(this.subtotal)

      this.subtotal = this.subtotal + parseFloat(item.price)

      // this.subtotalsum = parseFloat(this.subtotal) + parseFloat(item.price)

      console.log("subtotal", this.subtotal)

      console.log("", item.quantity)
      this.countqty = item.quantity

    }

  }


  


  changeRemove(item) {


    console.log("hello", item)


    if (item.quantity != 1) {



      item.quantity = item.quantity - 1

      item.amount = item.quantity


      item.amount = item.amount * parseFloat(item.price)

      console.log("check", item.amount)

      item.amount = item.amount



      this.total = this.total - parseFloat(item.price)

      console.log("item.price", parseFloat(item.price))

      //convert to double 
      this.subtotal = parseFloat(this.subtotal)

      this.subtotal = this.subtotal - parseFloat(item.price)

      this.countqty = item.quantity

    }
    else {

      // nfhjfhghjg 

      console.log("hello", item)

      console.log("error")
      // this.productitems.splice(0,item)
      console.log("removed", this.productitems)

      let alert = this.alertCtrl.create({
        title: 'Warning!!',
        subTitle: 'Are you sure you want to remove this item',
        buttons: [{
          text: 'ok',
          role: 'cancel',
          handler: () => {
            // console.log('Cancel clicked');
            // var arr = [4, 5, 6];
            var idx = this.productitems.indexOf(item); // 1
            // be careful, .indexOf() will return -1 if the item is not found
            if (idx !== -1) {
              this.productitems.splice(idx, 1);
              console.log("hello", this.productitems)
              item.amount = item.amount
              this.subtotal = this.subtotal  - parseFloat(item.price)
              console.log("item.price", parseFloat(item.price))
              console.log("", item.quantity)
              console.log("", item.quantity)
              this.countqty = item.quantity
            }
          }
        },
        {
          text: 'cancel',
          handler: () => {
            console.log('Buy clicked');
          }
        }]
      });
      alert.present();

    }
  }


  removeFromCart(item, i) {


    console.log(item)
    console.log(i)


    // this.total = this.subtotal


    var idx = this.productitems.indexOf(item); // 1

    console.log("idx", idx)

    const alert = this.alertCtrl.create({
      title: 'Warning!!',
      subTitle: 'Are you sure you want to remove this item',
      buttons: [
        {
          text: 'ok',
          handler: () => {
            console.log('Disagree clicked');

            //rm total quantity from price
            console.log("total remaining", this.subtotal )
            console.log("total remaining", (item.amount))

            this.subtotal = this.subtotal  - parseFloat(item.amount) 
            console.log("total remaining", this.total)

            this.productitems.splice(idx, 1);
            localStorage.setItem('cartDetails', JSON.stringify(this.productitems));
            console.log("rm", this.productitems)

            // this.subtotal = this.total 
          }
        }
      ]
    });
    alert.present();

  }


  Invoice(){
    const confirm = this.alertCtrl.create({
      title: 'Invoice',
      message: 'Select to view invoice or add Outstanding balance',
      buttons: [
        {
          text: 'invoice',
          handler: () => {

            var invoice = true
            //vat
            this.percentage = 0.15
            console.log("total is", this.total)
            //vat
            this.vatamount = 0
            console.log("vat is", this.vatamount)
            //total
            this.total = parseFloat(this.subtotal) + parseFloat(this.vatamount)
            console.log("total price check", this.total)
            console.log("this.total check", this.total)
            console.log("prodcuts", this.productitems)
          
            if (this.productitems.length == 0){
            
  
              const alert = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Product Removed please go back and add a product ',
                buttons: [{
                  text:'ok',
                  handler: () =>{

                    this.navCtrl.push(ProductPage)

                  }
                }]
              });
              alert.present();

            }
            else{

              this.navCtrl.push(ViewPage, {
                itemcheck: this.productitems,
                subtotal: this.subtotal,
                vat: this.vatamount,
                invoice: invoice,
                total: this.total,
              })

            }

        
          }
        },
        {
          text: 'Outstanding',
          handler: () => {
            // this.percentage = 0.15
            //vat
            this.vatamount = 0.00
            console.log("vat is", this.vatamount)
            //total
            this.total = this.subtotal
            console.log("total price check", this.total)
            console.log("this.total check", this.total)
            console.log("prodcuts", this.productitems)
            
            if (this.productitems.length == 0){

              const alert = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Product Removed please go back and add a product ',
                buttons: [{
                  text: 'ok',
                  handler: () => {

                    this.navCtrl.push(ProductPage)

                  }
                }]
              });
              alert.present();

            }
            else{

              this.navCtrl.push(OutstandingPage, {
                itemcheck: this.productitems,
                subtotal: this.subtotal,
                vat: this.vatamount,
                total: this.total,
              })

            }

      
          }
        }
      ]
    });
    confirm.present();
  }


  ViewOrDiscountQuote(){

    const confirm = this.alertCtrl.create({
      title: 'Quote',
      message: 'Select to view quote or add a discount',
      buttons: [
        {
          text: 'View',
          handler: () => {
            //vat

            this.percentage = 0.15

            console.log("total is", this.total)

            //vat
            this.vatamount = 0
            console.log("vat is", this.vatamount)

            //total
            this.total = parseFloat(this.subtotal) + parseFloat(this.vatamount) 
            console.log("total price check", this.total)

            console.log("this.total check", this.total)

            var quote = true;

            console.log("prodcuts", this.productitems)
     
            if (this.productitems.length == 0){

              const alert = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Product Removed please go back and add a product ',
                buttons: [{
                  text: 'ok',
                  handler: () => {

                    this.navCtrl.push(ProductPage)

                  }
                }]
              });
              alert.present();

            }
            else{

              this.navCtrl.push(ViewPage, {
                itemcheck: this.productitems,
                subtotal: this.subtotal,
                vat: this.vatamount,
                total: this.total,
                quote: quote

              })

            }

        
          }
        },
        {
          text: 'Discount',
          handler: () => {
            
            // this.percentage = 0.15
            //vat
            this.vatamount = 0.00
            console.log("vat is", this.vatamount)
            //total
            this.total = this.subtotal
            console.log("total price check", this.total)
            console.log("this.total check", this.total)
            console.log("prodcuts", this.productitems)
            

            if (this.productitems.length == 0){

              const alert = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Product Removed please go back and add a product ',
                buttons: [{
                  text: 'ok',
                  handler: () => {
                    this.navCtrl.push(ProductPage)
                  }
                }]
              });
              alert.present();
            }
            else{
              this.navCtrl.push(AdddiscountPage, {
                itemcheck: this.productitems,
                subtotal: this.subtotal,
                vat: this.vatamount,
                total: this.total,
              })
            }

          }
        }
      ]
    });
    confirm.present();
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad AddqtyPage');
  }

}
