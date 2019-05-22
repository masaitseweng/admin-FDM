import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SendquotePage} from '../sendquote/sendquote';


@IonicPage()
@Component({
  selector: 'page-invoice',
  templateUrl: 'invoice.html',
})
export class InvoicePage {

  itemcheck: any
  subtotal: any
  vat: any
  totalFormated: any
  total: any


  discount: any
  percentage: any

  constructor(public navCtrl: NavController, public navParams: NavParams) {

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

  emailQuote() {

      console.log("send no discount")
      this.navCtrl.push(SendquotePage, {
        products: this.itemcheck,
        subtotal: this.subtotal,
        vat: this.vat,
        total: this.total

      })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoicePage');
  }

}
