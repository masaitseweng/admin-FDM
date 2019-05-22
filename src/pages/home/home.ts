import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import {ProductPage} from '../product/product';
import {NotificationsPage} from '../notifications/notifications';
import {ApiProvider} from '../../providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  myDate: any = new Date().toString();  
  products:any

  User_data:any

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public api: ApiProvider) {
 

    var notadmin = localStorage.getItem('notAdmin')
    console.log("admin controller ", notadmin)

    


    var USER_DATA = localStorage.getItem('USER-DATA')
    console.log("User-DATA", JSON.parse(USER_DATA))

    this.User_data = JSON.parse(USER_DATA)

    console.log("1 ", this.User_data.success[0].cellnumber)
    console.log("", this.User_data.success["0"].email)


    console.log("perfect", this.myDate);

    console.log("", this.myDate)

    this.myDate = this.myDate.split(' ', 5).join(' ');
    console.log("date", this.myDate);

  
   
  }

  menuToggleClick() {
  console.log("hello" )
  }


  ProductPage(){
    this.navCtrl.push(ProductPage)
  }


  presentNotifications(myEvent) {
    
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });

  }

}
