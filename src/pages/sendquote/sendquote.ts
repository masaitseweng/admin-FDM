import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController, LoadingController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import {HomePage} from '../home/home';


@IonicPage()
@Component({
  selector: 'page-sendquote',
  templateUrl: 'sendquote.html',
})
export class SendquotePage {

  myDate: any = new Date().toString(); 

  sendemailData: any
  sendobject:any


  ///object
  products: any
  subtotal:any
  vat: any
  total: any

  sendDATA:any

  invoiceNumber: number =120;
  
  discount: any
  percentage: any
  quote:any
  outstanding:any
  invoice:any

  ////
  paid: any

  Usersendquote:any

  User_data:any

 

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
  
    this.discount = navParams.get('discount')
    this.quote = navParams.get('quote')
    this.outstanding = navParams.get('outstanding') 
    this.invoice = navParams.get('invoice')
    this.paid = navParams.get('paid')


    var USER_DATA = localStorage.getItem('USER-DATA')
    console.log("User-DATA", JSON.parse(USER_DATA))

    this.User_data = JSON.parse(USER_DATA)




    if (this.discount){

     console.log("here discount")

      //Date
      this.myDate = this.myDate.split(' ', 5).join(' ');
      console.log("date", this.myDate);
      //invoice number
      console.log("invoice number", this.invoiceNumber)

      this.sendemailData = { "Name": "", "Surname": "", "Streetaddress": "", "Suburb": "", "city": "", "Postal": "", "to": "" }

      //objects
      this.products = navParams.get('products');
      console.log("products", this.products)

      //subtotal
      this.subtotal = navParams.get('subtotal');
      console.log("subtotal", this.subtotal)


      //discount
      this.percentage = navParams.get('percentage')
      console.log("perce", this.percentage)

      //total
      this.total = navParams.get('total');
      console.log("total", this.total)

    }
    else if (this.quote){

      console.log("here discount error ")
      //Date
      this.myDate = this.myDate.split(' ', 5).join(' ');
      console.log("date", this.myDate);
      //invoice number
      console.log("invoice number", this.invoiceNumber)

      this.sendemailData = { "Name": "", "Surname": "", "Streetaddress": "", "Suburb": "", "city": "", "Postal": "", "to": "" }

      //objects
      this.products = navParams.get('products');
      console.log("products", this.products)

      //subtotal
      this.subtotal = navParams.get('subtotal');
      console.log("subtotal", this.subtotal)


      //vat
      this.vat = navParams.get('vat');
      console.log("vat", this.vat)

      //total
      this.total = navParams.get('total');
      console.log("total", this.total)

    }

    else if (this.outstanding){


      console.log("here discount error ")
      //Date
      this.myDate = this.myDate.split(' ', 5).join(' ');
      console.log("date", this.myDate);
      //invoice number
      console.log("invoice number", this.invoiceNumber)

      this.sendemailData = { "Name": "", "Surname": "", "Streetaddress": "", "Suburb": "", "city": "", "Postal": "", "to": "" }

      //objects
      this.products = navParams.get('products');
      console.log("products", this.products)

      //subtotal
      this.subtotal = navParams.get('subtotal');
      console.log("subtotal", this.subtotal)


      //paid
      this.paid = navParams.get('paid');
      console.log("paid", this.paid)


      //total
      this.total = navParams.get('total');
      console.log("total", this.total)

    }

    else if (this.invoice) {


      console.log("here discount error ")
      //Date
      this.myDate = this.myDate.split(' ', 5).join(' ');
      console.log("date", this.myDate);
      //invoice number
      console.log("invoice number", this.invoiceNumber)

      this.sendemailData = { "Name": "", "Surname": "", "Streetaddress": "", "Suburb": "", "city": "", "Postal": "", "to": "" }

      //objects
      this.products = navParams.get('products');
      console.log("products", this.products)

      //subtotal
      this.subtotal = navParams.get('subtotal');
      console.log("subtotal", this.subtotal)


      //vat
      this.vat = navParams.get('vat');
      console.log("vat", this.vat)


      //total
      this.total = navParams.get('total');
      console.log("total", this.total)

    }



    


  }


  send(){


    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 2000
    });

    loader.dismiss();



    loader.present().then(() => {

    if (this.discount) {

      console.log("user details check", this.sendemailData)
      this.sendobject = { "User_details": this.sendemailData, "Date": this.myDate, "InvoiceNo": this.invoiceNumber, "Main_products": this.products, "Sub_total": this.subtotal, "discount": this.discount, "percentage": this.percentage, "Total": this.total }
      console.log("testing", this.sendobject)


      this.api.postSendQuotediscount(this.sendobject).subscribe(DATA => {
        console.log("DATA", DATA)

        this.sendDATA = DATA
      
        if (this.sendDATA.success == "input"){

          loader.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Your quote has been sent successfully to the email address you entered ',
            buttons: [
              {
                text: 'Ok',
                handler: data => {
                  console.log('Cancel clicked');
                  this.navCtrl.push(HomePage)
                }
              }
            ]

          });

          alert.present();

        }
        else{


          console.log("", this.sendDATA.fail)

          loader.dismiss();

          let alert = this.alertCtrl.create({

            title: 'Error',
            message: '' + this.sendDATA.fail,
            buttons: ['OK']
          });

          alert.present();
        }

      }, (err) => {
        loader.dismiss();
        console.log(err)
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'network was disconnected :-(' + err.statusText,
          buttons: ['OK']
        });
        alert.present();
      })
    }
    else if (this.quote){
      console.log("user details check", this.sendemailData)
      this.sendobject = { "User_details": this.sendemailData, "Date": this.myDate, "InvoiceNo": this.invoiceNumber, "Main_products": this.products, "Sub_total": this.subtotal, "Vat": this.vat, "Total": this.total }
      console.log("testing", this.sendobject)
      this.api.postSendQuote(this.sendobject).subscribe(DATA => {
        // console.log("DATA", DATA)
        console.log("DATA", DATA)
        this.sendDATA = DATA
        if (this.sendDATA.success == "input") {
         //////////
          var pdfpath = "http://flawlessdigitalmarketing.co.za/api/" + this.sendDATA.attachments[0]

          this.Usersendquote = { "user_ID": this.User_data.success[0].id, "quote_link": pdfpath, "Total_amount": this.total, "Name": this.User_data.success[0].name, "Email_address": this.User_data.success[0].email, "Cell_number": this.User_data.success[0].cellnumber, "Sent_quote_date": this.myDate }

          // this.Usersendquote = { "user_ID": "1", "quote_link": this.sendDATA.attachments[0], "Total_amount": this.total, "Name": "masa", "Email_address": "masa@applord.co.z", "Cell_number": "081 4563 664", "Sent_quote_date": this.myDate }


          console.log("data==>", this.Usersendquote)
          this.api.postUsersendquote(this.Usersendquote).subscribe(DATA => {
            console.log("data", DATA);

          })

         //////////
          loader.dismiss();
          let alert = this.alertCtrl.create({
            message: 'Your quote has been sent successfully to the email address you entered ',
            buttons: [
              {
                text: 'Ok',
                handler: data => {

           

                  console.log('Cancel clicked');
                  // this.navCtrl.push(HomePage)
                }
              }
            ]
          });
          alert.present();
        }
        else {
          console.log("", this.sendDATA.fail)
          loader.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Error',
            message: '' + this.sendDATA.fail,
            buttons: ['OK']
          });
          alert.present();
        }
      }, (err) => {
        loader.dismiss();
        console.log(err)
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'network was disconnected :-(' + err.statusText,
          buttons: ['OK']
        });
        alert.present();
      })
    }

    else if (this.outstanding) {

      console.log("outstanding", this.outstanding )
      console.log("subtotal", this.subtotal)
      console.log("user details check", this.sendemailData)
      this.sendobject = { "User_details": this.sendemailData, "Date": this.myDate, "InvoiceNo": this.invoiceNumber, "Main_products": this.products, "Sub_total": this.subtotal, "paid":this.paid, "Total": this.total }
      console.log("testing", this.sendobject)
      this.api.postSendOutstanding(this.sendobject).subscribe(DATA => {
        console.log("DATA", DATA)
        console.log("DATA", DATA)
        this.sendDATA = DATA
        if (this.sendDATA.success == "input") {
          loader.dismiss();
          let alert = this.alertCtrl.create({
            message: 'Your quote has been sent successfully to the email address you entered ',
            buttons: [
              {
                text: 'Ok',
                handler: data => {

                  

                
     

                  console.log('Cancel clicked');
                  this.navCtrl.push(HomePage)
                }
              }
            ]
          });
          alert.present();
        }
        else {
          console.log("", this.sendDATA.fail)
          loader.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Error',
            message: '' + this.sendDATA.fail,
            buttons: ['OK']
          });
          alert.present();
        }
      }, (err) => {
        loader.dismiss();
        console.log(err)
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'network was disconnected :-(' + err.statusText,
          buttons: ['OK']
        });
        alert.present();
      })
    }


    else if (this.invoice) {

        console.log("outstanding", this.outstanding)
        console.log("subtotal", this.subtotal)
        console.log("user details check", this.sendemailData)
      this.sendobject = { "User_details": this.sendemailData, "Date": this.myDate, "InvoiceNo": this.invoiceNumber, "Main_products": this.products, "Sub_total": this.subtotal, "Vat": this.vat, "Total": this.total }
        console.log("testing", this.sendobject)
        this.api.postSendInvoice(this.sendobject).subscribe(DATA => {
          console.log("DATA", DATA)
          console.log("DATA", DATA)
          this.sendDATA = DATA
          if (this.sendDATA.success == "input") {
            loader.dismiss();
            let alert = this.alertCtrl.create({
              message: 'Your quote has been sent successfully to the email address you entered ',
              buttons: [
                {
                  text: 'Ok',
                  handler: data => {
                    console.log('Cancel clicked');
                    this.navCtrl.push(HomePage)
                  }
                }
              ]
            });
            alert.present();
          }
          else {
            console.log("", this.sendDATA.fail)
            loader.dismiss();
            let alert = this.alertCtrl.create({
              title: 'Error',
              message: '' + this.sendDATA.fail,
              buttons: ['OK']
            });
            alert.present();
          }
        }, (err) => {
          loader.dismiss();
          console.log(err)
          let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'network was disconnected :-(' + err.statusText,
            buttons: ['OK']
          });
          alert.present();
        })
      }



    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendquotePage');
  }

}


