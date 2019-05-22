import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html'
})
export class TabPage {

  clientsRoot = 'ClientsPage'
  appointmentRoot = 'AppointmentPage'
  calendarRoot = 'CalendarPage'


  constructor(public navCtrl: NavController) {

  }

  appointment(){
    console.log("hello appointment")
  }



}
