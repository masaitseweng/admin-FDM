import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SendquotePage} from '../sendquote/sendquote';


@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {

  itemcheck:any
  subtotal:any
  vat:any
  totalFormated:any
  total: any
  

 
  percentage: any

  status:any

  discount: any
  quote:any
  

  outstanding: any
  paid:any
  invoice:any
  discountprice:any
  discountpriceview:any

 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  

    this.discount = navParams.get('discount')
    // console.log("discount", this.discount)

    this.quote = navParams.get('quote')
    // console.log("quote", this.quote )
    
    this.outstanding = navParams.get('outstanding') 
    // console.log("outstanding", this.outstanding) 

    this.invoice = navParams.get('invoice')



    if (this.discount == true){

      console.log("discount", this.discount)

      //object checked
      this.itemcheck = navParams.get('itemcheck')
      console.log("item", this.itemcheck)

      //total subtotal
      this.subtotal = navParams.get('subtotal')
      console.log("subtotal", this.subtotal)

      this.percentage = navParams.get('percentage')
      console.log("perc", this.percentage)
     
      //discount-price
      this.discountprice = navParams.get('discountprice')
      this.discountpriceview = Number.parseFloat(this.discountprice).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
      //total
      this.total = navParams.get('total')

      //convert to 2decimal place
      this.totalFormated = Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
      console.log("total", this.total)


  }

    else if (this.quote == true) {

      console.log("quote", this.quote)

      //object checked
      this.itemcheck = navParams.get('itemcheck')
      console.log("item", this.itemcheck)

      //total subtotal
      this.subtotal = navParams.get('subtotal')
      console.log("subtotal", this.subtotal)

      //vat
      this.vat = navParams.get('vat')
      //convert to 2decimal place
      this.vat = Number.parseFloat(this.vat).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
      console.log("vat", this.vat)

      //total
      this.total = navParams.get('total')
      //convert to 2decimal place
      this.total = this.subtotal
      console.log("total", this.total)

    }

    else if (this.outstanding == true) {

      console.log("outstanding", this.outstanding)

      //object checked
      this.itemcheck = navParams.get('itemcheck')
      console.log("item", this.itemcheck)

      //total subtotal
      this.subtotal = navParams.get('subtotal')
      console.log("subtotal---inside", this.subtotal)

      //paid
      this.paid = navParams.get('paid')
      //convert to 2decimal place
      this.paid = Number.parseFloat(this.paid).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
      console.log("vat", this.paid)

      //total
      this.total = navParams.get('total')
      //convert to 2decimal place
      this.total = Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
      console.log("total", this.total)

    }

    else if (this.invoice == true){

      console.log("invoice", this.invoice)

      //object checked
      this.itemcheck = navParams.get('itemcheck')
      console.log("item", this.itemcheck)

      //total subtotal
      this.subtotal = navParams.get('subtotal')
      console.log("subtotal", this.subtotal)

      //vat
      this.vat = navParams.get('vat')
      //convert to 2decimal place
      this.vat = Number.parseFloat(this.vat).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
      console.log("vat", this.vat)

      //total
      this.total = navParams.get('total')
      //convert to 2decimal place
      this.total = Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
      console.log("total", this.total)

    }
  }



  emailQuote(){

    if (this.discount){

      this.navCtrl.push(SendquotePage, {
        products: this.itemcheck,
        subtotal: this.subtotal,
        total: this.total,
        discount: this.discountpriceview ,
        percentage: this.percentage 
      })
      

    }
    else if(this.quote){

    console.log("send no discount")

    this.navCtrl.push(SendquotePage,{
      products: this.itemcheck,
      subtotal: this.subtotal,
      vat:this.vat,
      total: this.total,
      quote: this.quote
     
    })

    }

    else if (this.outstanding){

      console.log("send no discount", this.subtotal)

      this.navCtrl.push(SendquotePage, {
        products: this.itemcheck,
        subtotal: this.subtotal,
        paid: this.paid,
        total: this.total,
        outstanding: this.outstanding

      })

    }


    else if (this.invoice) {

      console.log("send no discount", this.subtotal)
      this.navCtrl.push(SendquotePage, {
        products: this.itemcheck,
        subtotal: this.subtotal,
        vat: this.vat,
        total: this.total,
        invoice : this.invoice
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
  }

}
