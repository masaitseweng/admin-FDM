import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserEditDeletePage} from '../user-edit-delete/user-edit-delete';
import {ApiProvider} from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  Users:any

  constructor(public navCtrl: NavController, public navParams: NavParams, public Api: ApiProvider) {
 
   this.Api.getadminUsers().subscribe(DATA=>{
     console.log("DATA",DATA )

     this.Users = DATA
     console.log("users-in", this.Users)
   }) 
   
    console.log("users", this.Users)
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }


  user(){
    console.log("hello", )

    this.navCtrl.push(UserEditDeletePage)
  }

}
