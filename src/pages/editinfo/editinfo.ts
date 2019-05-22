import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import {ApiProvider} from '../../providers/api/api';
import {ClientsPage} from '../clients/clients';

@IonicPage()
@Component({
  selector: 'page-editinfo',
  templateUrl: 'editinfo.html',
})
export class EditinfoPage {

  info:any

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  
    this.info = navParams.get("info")
    console.log("info==>", this.info)

    if (this.info.CompanyName == ""){

      this.info.CompanyName = "Empty";
    }
    else{
      this.info.CompanyName
    }

    //job title

    if (this.info.JobTitlePosition == "") {

      this.info.JobTitlePosition = "Empty";
    }
    else {
      this.info.JobTitlePosition
    }
 
    //person name
    if (this.info.PersonsName == "") {

      this.info.PersonsName = "Empty";
    }
    else {
      this.info.PersonsName
    }


    //EmailAddress
    if (this.info.EmailAddress == "") {

      this.info.EmailAddress = "Empty";
    }
    else {
      this.info.EmailAddress
    }

    //EmailAddress
    if (this.info.ContactNumber == "") {

      this.info.ContactNumber = "Empty";
    }
    else {
      this.info.ContactNumber
    }

    //Streetaddress
    if (this.info.Streetaddress == "") {

      this.info.Streetaddress = "Empty";
    }
    else {
      this.info.Streetaddress
    }

    //Streetaddress
    if (this.info.Suburb == "") {

      this.info.Suburb = "Empty";
    }
    else {
      this.info.Suburb
    }
    
    //Streetaddress
    if (this.info.CityTown == "") {

      this.info.CityTown = "Empty";
    }
    else {
      this.info.CityTown
    }

    // PostalCode
    if (this.info.PostalCode == "") {

      this.info.PostalCode = "Empty";
    }
    else {
      this.info.PostalCode
    }

    //others
    if (this.info.others == "") {

      this.info.others = "Empty";
    }
    else {
      this.info.others
    }


    


  }


  clientinfofunc(info){



    

    console.log("info111", info.CompanyName);

    var formData = new FormData();

    formData.append("id", info.id);
    formData.append("user_id", info.user_id);
    formData.append("CompanyName", info.CompanyName);
    formData.append("JobTitlePosition", info.JobTitlePosition);
    formData.append("PersonsName", info.PersonsName);
    formData.append("EmailAddress", info.EmailAddress);
    formData.append("ContactNumber", info.ContactNumber);
    formData.append("Streetaddress", info.Streetaddress);

    //
    formData.append("Suburb", info.Suburb);
    formData.append("CityTown", info.CityTown);
    formData.append("PostalCode", info.PostalCode);
    //
    formData.append("others", info.others);



    console.log("view", formData)


  

    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      // duration: 2000
    });

    loader.dismiss();

    loader.present().then(() => {


    this.api.postupdateclientinfo(formData).subscribe(DATA =>{

      console.log("data", DATA )

      loader.dismiss();

  
      let alert = this.alertCtrl.create({
        title: 'updated',
        subTitle: 'client info undated successfully ',
        buttons: [{
          text: 'Ok',
          handler: data => {
            console.log('Cancel clicked');
            this.navCtrl.push(ClientsPage)
          }
        }]
      });
      alert.present();


    }, (err) => {

      loader.dismiss();

      console.log(err)
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'User ' + err.statusText,
        buttons: ['OK']
      });
      alert.present();


    })


    })




  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditinfoPage');
  }

  

}
