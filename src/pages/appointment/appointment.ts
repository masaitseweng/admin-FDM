import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController  } from 'ionic-angular';
import { CalendarPage} from '../calendar/calendar';
import {ApiProvider} from '../../providers/api/api';


@IonicPage()
@Component({
  selector: 'page-appointment',
  templateUrl: 'appointment.html',
})
export class AppointmentPage {

  info:any

  clientSegments: any

  startdate: any
  enddate: any

  oneHours = new Date();


  startTime: any
  endTime: any

  start = new Date();
  end: any



  newdate: any

  date = new Date()

  userdetailsModify: any

  infoone = { "nameBusiness": "", "address": "", "contactname": "", "PhoneNumber": "", "alternativeNumber": "", "Website": "", "Date": "", "time": "" }

  user_UID: any
  // randomN: any

  User_data:any

  UserDATA:any

  userappointment:any

  constructor(public navCtrl: NavController, public navParams: NavParams, public Api: ApiProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
 
    this.info = navParams.get('info');
    console.log('data', this.info );


    this.clientSegments = "AddAppointment"
  }



  add(info, time, date) {


    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      // duration: 2000
    });

    loader.dismiss();

    loader.present().then(() => {





    console.log("time ", time, "date ", date, "info", info)
    //date
    this.start = new Date(info.date)
    console.log("date", this.start)

    //time
    this.start = new Date(date + " " + time)
    // this.start.setHours(this.start.getHours() + 0)
    console.log("date--1", this.start.toString())

    //endtime
    this.end = new Date(date + " " + time)
    // console.log("date-1 ", this.end.toTimeString())    
    this.end.setHours(this.end.getHours() + 1)
    console.log("date-2 ", this.end)

    // this.randomN = Math.random().toString(36).substring(7);
    // console.log("random====> ===>", this.randomN);

    var USER_DATA = localStorage.getItem('USER-DATA')
    console.log("User-DATA", JSON.parse(USER_DATA))

    this.User_data = JSON.parse(USER_DATA)

    // console.log("1 ", this.User_data.success[0].cellnumber)
    // console.log("", this.User_data.success["0"].id)


      this.userdetailsModify = { "user_id": parseInt(this.User_data.success["0"].id), "CompanyName": info.CompanyName, "JobTitlePosition": info.JobTitlePosition, "PersonsName": info.PersonsName, "EmailAddress": info.EmailAddress, "ContactNumber": info.ContactNumber, "Streetaddress": info.Streetaddress, "Suburb": info.Suburb, "CityTown": info.CityTown, "PostalCode": info.PostalCode, "others": info.others, "startTime": this.start, "endTime": this.end, "Timevalue": time, "Datevalue": date, "user_clients_ID": this.info.id}

    console.log("userdetailsModify", this.userdetailsModify)


    this.Api.postaddappointment(this.userdetailsModify).subscribe(DATA =>{
      console.log("data what is this", DATA)

      this.Api.getclientappoint(parseInt(this.User_data.success["0"].id)).subscribe(DATA => {
        console.log("DATA=>added values", DATA)
    
        console.log("appointment", DATA)

        loader.dismiss();

            this.navCtrl.push(CalendarPage, {
              appointment: DATA
    })

      })

    })

    })

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentPage');
  }

}
