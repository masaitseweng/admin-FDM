import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {ViewPage} from '../view/view';

@IonicPage()
@Component({
  selector: 'page-outstanding',
  templateUrl: 'outstanding.html',
})
export class OutstandingPage {

  itemcheck: any
  subtotal: any
  vat: any
  total: any
  totalformat: any

  totaldiscount: any = 0;

  // onediscount:any = 0.05
  totaldiscountvalue: any = 0

  discount: any = 0
  discountformated: any


  sub: any
  subformat: any

  disabledone: boolean = false
  disabledtwo: boolean = false
  disabledthree: boolean = false
  disabledfour: boolean = false
  EnableSend: boolean = true;

  percentage: any
  perc: any

  PaidAmount: any = [{ Amount: "" }];

  paid:any
  paidView:any
  totalview:any

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {


    this.discountformated = this.discount

    this.itemcheck = navParams.get('itemcheck')
    console.log("", this.itemcheck)
    this.subtotal = navParams.get('subtotal')
    console.log("", this.subtotal)

    this.sub = this.subtotal
    this.subformat = Number.parseFloat(this.subtotal).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")

    this.vat = navParams.get('vat')
    console.log("", this.vat)
    this.total = navParams.get('total')
    this.totalview = Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
    console.log("", this.total)

    this.paidView = 0.00

  }



  calculate(PaidAmount) {

    console.log("amount", PaidAmount.Amount)


    const confirm = this.alertCtrl.create({
      title: 'Paid Amount',
      message: PaidAmount.Amount+''+'will be removed from the original invoice',
      buttons: [
        {
          text: 'Ok',
          handler: () => {


            this.EnableSend = false;



            this.total = parseFloat(this.total) - parseFloat(PaidAmount.Amount)
            console.log("paid", this.total);
            console.log("sub", this.sub)
            console.log("paid", PaidAmount.Amount)

            this.paidView = Number.parseFloat(this.PaidAmount.Amount).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
     
            this.totalview = Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")


          }
        }
      ]
    });
    confirm.present();

  }


  send() {

    var outstanding = true

    this.navCtrl.push(ViewPage, {
      itemcheck: this.itemcheck,
      subtotal: this.sub,
      paid: this.PaidAmount.Amount,
      total: this.total,
      outstanding: outstanding,
      // percentage: this.perc,
      // discountcondition: discountcondition

    })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad OutstandingPage');
  }

}
