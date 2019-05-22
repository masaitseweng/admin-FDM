import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { EditinfoPage } from '../editinfo/editinfo';
import { AppointmentPage } from '../appointment/appointment';
@IonicPage()
@Component({
  selector: 'page-add-appointment',
  templateUrl: 'add-appointment.html',
})
export class AddAppointmentPage {

  getclientinfo:any
  items:any

  constructor(public navCtrl: NavController, public navParams: NavParams, public Api: ApiProvider,) {
 

    this.getData();
  }

  getData(){
    var key = localStorage.getItem('USER-DATA')
    var id = JSON.parse(key)
    this.Api.getclientinfo(id.success["0"].id).subscribe(DATA => {
      console.log("user", DATA)
      this.getclientinfo = DATA
    })
  }

  doInfinite(infiniteScroll) {

    var key = localStorage.getItem('USER-DATA')
    var id = JSON.parse(key)
    this.Api.getclientinfo(id.success["0"].id).subscribe(DATA => {
      console.log("user", DATA)
      this.getclientinfo = this.getclientinfo.concat(DATA);
      infiniteScroll.complete();
    })

  }


  doRefresh(refresher) {

    var key = localStorage.getItem('USER-DATA')
    var id = JSON.parse(key)
    this.Api.getclientinfo(id.success["0"].id).subscribe(DATA => {
      this.getclientinfo = DATA
      refresher.complete();
    });


  }









  editinfo(info) {
    console.log("edit==>", info)

    this.navCtrl.push(EditinfoPage, {
      info: info
    })

  }


  addappointment(info) {
    console.log("added==>", info)

    this.navCtrl.push(AppointmentPage, {
      info: info
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAppointmentPage');
  }

}
