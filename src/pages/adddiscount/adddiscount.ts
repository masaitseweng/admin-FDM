import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ViewPage } from '../view/view';

@IonicPage()
@Component({
  selector: 'page-adddiscount',
  templateUrl: 'adddiscount.html',
})
export class AdddiscountPage {

  itemcheck:any
  subtotal: any
  vat: any
  total: any
  totalformat:any

  totaldiscount:any=0;

  // onediscount:any = 0.05
  totaldiscountvalue:any = 0

  discount:any =0
  discountformated:any
  

  sub:any 
  subformat:any

  disabledone:boolean = false
  disabledtwo:boolean = false
  disabledthree: boolean = false
  disabledfour: boolean = false
  EnableSend:boolean = true;

  percentage:any
  perc:any

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
    this.totalformat = Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")

    console.log("", this.total )
  
  
  
  
  }

  one(item){

    const confirm = this.alertCtrl.create({
      title: 'Discount',
      message: 'clients is given 5% discount',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.perc = 5
            this.percentage = 0.05
            this.disabledone = true;
            this.disabledtwo = true;
            this.disabledthree = true;
            this.disabledfour = true;
            this.EnableSend = false;
            console.log(item)
            this.discount = parseFloat(this.total) * this.percentage
            this.discountformated = Number.parseFloat(this.discount).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
            console.log("formated", this.discountformated)
            console.log("one", this.discount)
            this.total = parseFloat(this.total) - parseFloat(this.discount) 
            console.log("one", this.total )
            this.totalformat = Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")

          }
        }
      ]
    });
    confirm.present();
  }

  two(item) {

    const confirm = this.alertCtrl.create({
      title: 'Discount',
      message: 'clients is given 10% discount',
      buttons: [
        {
          text: 'Ok',
          handler: () => {

            this.perc = 10
            this.percentage = 0.1
            this.disabledone = true;
            this.disabledtwo = true;
            this.disabledthree = true;
            this.disabledfour = true;
            this.EnableSend = false;
            console.log(item)
            this.discount = parseFloat(this.total) * this.percentage
            this.discountformated = Number.parseFloat(this.discount).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
            console.log("formated", this.discountformated)
            console.log("one", this.discount)
            this.total = parseFloat(this.total) - parseFloat(this.discount)
            console.log("one", this.total)
            this.totalformat = Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")

          }
        }
      ]
    });
    confirm.present();

  }
  three(item) {

    const confirm = this.alertCtrl.create({
      title: 'Discount',
      message: 'clients is given 25% discount',
      buttons: [
        {
          text: 'Ok',
          handler: () => {

            this.perc = 25
            this.percentage = 0.25
            this.disabledone = true;
            this.disabledtwo = true;
            this.disabledthree = true;
            this.disabledfour = true;
            this.EnableSend = false;
            console.log(item)
            this.discount = parseFloat(this.total) * this.percentage
            this.discountformated = Number.parseFloat(this.discount).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
            console.log("formated", this.discountformated)
            console.log("one", this.discount)
            this.total = parseFloat(this.total) - parseFloat(this.discount)
            console.log("one-total", this.total)
            this.totalformat = Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")

          }
        }
      ]
    });
    confirm.present();

  }

  four(item) {

    const confirm = this.alertCtrl.create({
      title: 'Discount',
      message: 'clients is given 50% discount',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
  
            this.perc = 50
            this.percentage = 0.50
            this.disabledone = true;
            this.disabledtwo = true;
            this.disabledthree = true;
            this.disabledfour = true;
            this.EnableSend = false;
            console.log(item)
            this.discount = parseFloat(this.total) * this.percentage 
            this.discountformated = Number.parseFloat(this.discount).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
            console.log("formated", this.discountformated)
            console.log("one", this.discount)
            this.total = parseFloat(this.total) - parseFloat(this.discount)
            this.totalformat = Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")

          }
        }
      ]
    });
    confirm.present();

  }

  send(){
 
    var discount = true

 this.navCtrl.push(ViewPage,{
  itemcheck: this.itemcheck,
  subtotal: this.sub,
  discountprice: this.discount,
  total : this.total,
  percentage: this.perc,
  discount: discount

})



  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdddiscountPage');
  }

}
