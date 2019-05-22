import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {ApiProvider} from '../../providers/api/api';
import {FeedbackPage} from '../feedback/feedback'; 

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  eventSource;
  viewTitle;
  isToday: boolean;
  calendar = {
    mode: 'week',
    currentDate: new Date()
  }; // these are the variable used by the calendar.

  appointment:any
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public Api: ApiProvider) {
  


    this.appointment = navParams.get('appointment')
    console.log("UserDATA", this.appointment);

    this.eventSource = this.createRandomEvents();
    console.log("display", this.eventSource)

    // this.Api.getclientappoint(this.UserDATA.user_name).subscribe(DATA =>{
    //   console.log("DATA=>", DATA)

    //   this.UserDATA = DATA
    // })


  }




  // loadEvents() {

  //     this.eventSource = this.createRandomEvents();
  //     console.log("display-1", this.eventSource)

  // }

  onViewTitleChanged(title) {

    console.log("title", title)



    this.viewTitle = new Date();
  }
  onEventSelected(event) {

    console.log("fff", event)

    const confirm = this.alertCtrl.create({
      title: 'Appointment',
      message: 'Do you what to view or edit appointment',
      buttons: [
        {
          text: 'View ',
          handler: () => {
            // console.log('Disagree clicked');
            // this.navCtrl.push(ViewappointmentPage, {
            //   object: event
            // })
          }
        },
        {
          text: 'Edit',
          handler: () => {
            // this.navCtrl.push(EditappointmentPage, {
            //   object: event
            // })

            // console.log('Agree clicked');
          },
          
        },
        {
          text: 'Feedback',
          handler: () => {
            this.navCtrl.push(FeedbackPage, {
              object: event
            })

            console.log('Agree clicked');
          },

        }
  
      ]
    });
    confirm.present();



    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);

  }


  changeMode(mode) {
    console.log("mode", mode)
    this.calendar.mode = mode;

  }


  today() {
    this.calendar.currentDate = new Date();
    console.log("date", this.calendar.currentDate)
  }


  onTimeSelected(ev) {

    console.log("display this", ev)

    console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
      (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
  }

  onCurrentDateChanged(event: Date) {

    console.log("display this", event)


  }

  createRandomEvents() {
   
    var events = [];

    // events.push({
    //   title: 'Event - ' + this.UserDATA.CompanyName,
    //   startTime: this.UserDATA.startTime,
    //   endTime: this.UserDATA.endTime,
    //   allDay: false
    // });

    // var events = [];

    this.appointment.forEach((element) => {


      let startTimevar = element.startTime
      let newTimeVar = new Date(startTimevar)
      console.log("start==>1", newTimeVar)

      let endTimevar = element.endTime
      let newendtimevar = new Date(endTimevar)
      console.log("end==>2", newendtimevar)

      events.push({
        title: element.CompanyName,
        startTime: newTimeVar,
        endTime: newendtimevar,


        CompanyName: element.CompanyName,
        JobTitlePosition: element.JobTitlePosition,
        PersonsName: element.PersonsName,
        EmailAddress: element.EmailAddress,
        ContactNumber: element.ContactNumber,

        Streetaddress: element.Streetaddress,

        Suburb: element.Suburb,
        CityTown: element.CityTown,
        PostalCode: element.PostalCode,
        others: element.others,
        date: element.data,
        time: element.time,
        appointment_ID: element.id,
        allDay: false,

        object: [{
          "CompanyName": element.CompanyName,
          "JobTitlePosition": element.JobTitlePosition,
          "PersonsName": element.PersonsName,
          "EmailAddress": element.EmailAddress,
          "ContactNumber": element.ContactNumber,
          "Streetaddress": element.Streetaddress,

          "Suburb": element.Suburb,
          "CityTown": element.CityTown,
          "PostalCode": element.PostalCode,
          "others": element.others,

          "date": element.Datevalue,
          "time": element.Timevalue,
          "appointment_ID": element.id,
        }],
      });
    });

    return events;
  }



  onRangeChanged(ev) {
    console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
  }

  markDisabled = (date: Date) => {
    var current = new Date();
    current.setHours(17, 0, 0);
    return date < current;
  };


  ionViewDidLoad() {
    console.log('ionViewDidLoad PlannerPage');

  }

}
