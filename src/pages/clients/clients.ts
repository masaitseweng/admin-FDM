import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController  } from 'ionic-angular';
import {ApiProvider} from '../../providers/api/api';
import { EditinfoPage} from '../editinfo/editinfo';
import {AppointmentPage} from '../appointment/appointment';
import { AddAppointmentPage } from '../add-appointment/add-appointment';
// import { Validators, FormBuilder, FormGroup } from '@angular/forms';
@IonicPage()
@Component({
  selector: 'page-clients',
  templateUrl: 'clients.html',
})
export class ClientsPage {

  clientSegments: any

  clientinfo = {};

  getclientinfo:any

  credentialsForm:any


  clientinfoApi:any
  


  constructor(public navCtrl: NavController, public navParams: NavParams, public Api: ApiProvider, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
   
    this.clientSegments = "clientinfo"

    var key = localStorage.getItem('USER-DATA')

    var id = JSON.parse(key)

    console.log("key ", id.success["0"].id)

    this.Api.getclientinfo(id.success["0"].id).subscribe(DATA =>{
      console.log("user",DATA)
      this.getclientinfo = DATA
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientsPage');
  }




  clientinfofunc(clientinfo){

    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      // duration: 2000
    });

    loader.dismiss();

    loader.present().then(() => {



      var key = localStorage.getItem('USER-DATA')

      var id = JSON.parse(key)

      console.log("key ", id.success["0"].id)

      console.log("click", clientinfo)

      this.clientinfoApi = { "user_id": id.success["0"].id, "CompanyName": clientinfo.CompanyName, "JobTitlePosition": clientinfo.JobTitlePosition, "PersonsName": clientinfo.PersonsName, "EmailAddress": clientinfo.EmailAddress, "ContactNumber": clientinfo.ContactNumber, "Streetaddress": clientinfo.Streetaddress, "Suburb": clientinfo.Suburb, "CityTown": clientinfo.CityTown, "PostalCode": clientinfo.PostalCode, "others": clientinfo.others }

      console.log("values", this.clientinfoApi)

      this.Api.postClientinfo(this.clientinfoApi).subscribe(DATA => {
        loader.dismiss();
        let alert = this.alertCtrl.create({
          title: 'Success',
          message: 'Client info is added succesfully',
          buttons: [
            {
              text: 'Ok',
              handler: data => {
                console.log('Cancel clicked');
                clientinfo.CompanyName = "";
                clientinfo.JobTitlePosition = "";
                clientinfo.PersonsName = "";
                clientinfo.EmailAddress = "";
                clientinfo.ContactNumber = "";
                clientinfo.Streetaddress = "";
                clientinfo.Suburb = "";
                clientinfo.CityTown = "";
                clientinfo.PostalCode ="";
                clientinfo.others = "";
              }
            },
            {
              text: 'add Appointment',
              handler: data => {
                console.log('Cancel clicked');
                this.navCtrl.setRoot(AddAppointmentPage)
              }
            }
          ]

        });

        alert.present();

        console.log("Results", DATA);
      }, (err) => {



        loader.dismiss();

        let alert = this.alertCtrl.create({
          title: 'Error',
          message: 'Client info already exists',
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
        console.log("error", err);
          console.log("error", JSON.stringify(err._body) );
      })
    })
  }

  editinfo(info){
    console.log("edit==>", info )

    this.navCtrl.push(EditinfoPage,{
      info: info
    })

  }

  addappointment(info){
    console.log("added==>", info)

    this.navCtrl.push(AppointmentPage,{
      info:info
    })
  }
 
}
