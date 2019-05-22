import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {AdminPage} from '../pages/admin/admin';



import {LoginPage} from '../pages/login/login';
// import {ProductPage} from '../pages/product/product';
import {ProfilePage} from '../pages/profile/profile';
import { ApiProvider} from '../providers/api/api';
import {TabPage} from '../pages/tab/tab';
import { ClientsPage} from '../pages/clients/clients';
import { AddAppointmentPage} from '../pages/add-appointment/add-appointment';
import { CalendarPage } from '../pages/calendar/calendar';

import { FeedbackPage} from '../pages/feedback/feedback';
// import {AdminPage} from '../pages/admin/admin';

import {UserPage} from '../pages/user/user'


export interface MenuItem {
  title: string;
  component: any;
  icon: string;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {


  @ViewChild(Nav) nav: Nav;

  // rootPage: any = UserPage;
  rootPage:any = LoginPage;


  // rootPage: any = AdminPage;
  // rootPage:any = LoginPage;
  // rootPage: any = FeedbackPage;
  // rootPage: any = ProductPage;

  appMenuItems: Array<MenuItem>;

  USERDATA:any
  userdata:any

  User_data:any

  AppointmentDATA:any
  products:any
  admin:any 
  notadmin:any

  adminvar:any={}
  

  constructor(platform: Platform, public menuCtrl: MenuController, statusBar: StatusBar, splashScreen: SplashScreen,public  Api:ApiProvider) {

    var USER_DATA = localStorage.getItem('USER-DATA')
    console.log("User-DATA", JSON.parse(USER_DATA))
    this.User_data = JSON.parse(USER_DATA)
   

     this.adminvar = localStorage.getItem('admin')
    console.log("admin controller ", JSON.parse(this.adminvar))
    this.admin = JSON.parse(this.adminvar)


                  this.appMenuItems = [
          { title: 'Home', component: HomePage, icon: 'home' },
          // {title: 'LeaderBoard', component: LeaderboardPage, icon: 'clipboard'},
          // { title: 'LeaderBoard', component: TabPage, icon: 'clipboard' },
          { title: 'Add clients', component: ClientsPage, icon: 'contact' },
          { title: 'Add Appointment', component: AddAppointmentPage, icon: 'clipboard' },
          { title: 'Appointment', component: CalendarPage, icon: 'calendar' },
          // { title: 'Clients visited', component: TabPage, icon: 'clipboard' }
        ];





    // var notadminvar = localStorage.getItem('notAdmin')
    // console.log("Not admin controller ", JSON.parse(notadmin))
    // this.notadmin = JSON.parse(notadmin)





  //   if (this.notadmin == null){

  //   }

  //   var notadmin = localStorage.getItem('notAdmin')
  //   console.log("Not admin controller ", JSON.parse(notadmin))
  //   this.notadmin = JSON.parse(notadmin)

  //   if (this.admin.admin == true){

  //             this.Api.getCategories().subscribe(DATA => {
  //         console.log("data", DATA)
  //         this.appMenuItems = DATA
  //       })


  //   }
  //   else{

  //   }




  //  if (this.notadmin.NotAdmin == true){

  //             this.appMenuItems = [
  //         { title: 'Home', component: HomePage, icon: 'home' },
  //         // {title: 'LeaderBoard', component: LeaderboardPage, icon: 'clipboard'},
  //         // { title: 'LeaderBoard', component: TabPage, icon: 'clipboard' },
  //         { title: 'Add clients', component: ClientsPage, icon: 'contact' },
  //         { title: 'Add Appointment', component: AddAppointmentPage, icon: 'clipboard' },
  //         { title: 'Appointment', component: CalendarPage, icon: 'calendar' },
  //         // { title: 'Clients visited', component: TabPage, icon: 'clipboard' }
  //       ];

  //   }

  //   else{

  //   }




    


     



    // this.view = "NotAdmin"
    

  //   if (this.User_data != ""){

  //     if (this.admin  == true){

  //       this.Api.getCategories().subscribe(DATA => {
  //         console.log("data", DATA)
  //         this.appMenuItems = DATA
  //       })


  //     }

  //     else if (this.notadmin == true){


  //       console.log("app")
  //       this.appMenuItems = [
  //         { title: 'Home', component: HomePage, icon: 'home' },
  //         // {title: 'LeaderBoard', component: LeaderboardPage, icon: 'clipboard'},
  //         // { title: 'LeaderBoard', component: TabPage, icon: 'clipboard' },
  //         { title: 'Add clients', component: ClientsPage, icon: 'contact' },
  //         { title: 'Add Appointment', component: AddAppointmentPage, icon: 'clipboard' },
  //         { title: 'Appointment', component: CalendarPage, icon: 'calendar' },
  //         // { title: 'Clients visited', component: TabPage, icon: 'clipboard' }
  //       ];

  //     }


  // }

  


  //   else {

 

  //       // console.log("app")
  //       // this.appMenuItems = [
  //       //   { title: 'Home', component: HomePage, icon: 'home' },
  //       //   // {title: 'LeaderBoard', component: LeaderboardPage, icon: 'clipboard'},
  //       //   // { title: 'LeaderBoard', component: TabPage, icon: 'clipboard' },
  //       //   { title: 'Add clients', component: ClientsPage, icon: 'contact' },
  //       //   { title: 'Add Appointment', component: AddAppointmentPage, icon: 'clipboard' },
  //       //   { title: 'Appointment', component: CalendarPage, icon: 'calendar' },
  //       //   // { title: 'Clients visited', component: TabPage, icon: 'clipboard' }
  //       // ];



    
  // }


    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }




  home(){

    console.log("sidemenu home")

    // if (this.notadmin == true){

    //   console.log("app")
    //   this.appMenuItems = [
    //     { title: 'Home', component: HomePage, icon: 'home' },
    //     // {title: 'LeaderBoard', component: LeaderboardPage, icon: 'clipboard'},
    //     // { title: 'LeaderBoard', component: TabPage, icon: 'clipboard' },
    //     { title: 'Add clients', component: ClientsPage, icon: 'contact' },
    //     { title: 'Add Appointment', component: AddAppointmentPage, icon: 'clipboard' },
    //     { title: 'Appointment', component: CalendarPage, icon: 'calendar' },
    //     // { title: 'Clients visited', component: TabPage, icon: 'clipboard' }
    //   ];

    // }





  }




  toggleMenu(){
    console.log("hello")
    // this.menuCtrl.toggle();
  }


  logout(){
    console.log("logout");
    this.nav.push(LoginPage);

  }

  profile(){

    this.nav.push(ProfilePage);

  }

  openPage(menuItem){
    console.log("inside", menuItem);

  
    if (menuItem.title == "Home"){
    
      this.nav.setRoot(HomePage) ;  
    }
    else if (menuItem.title == 'LeaderBoard'){
      this.nav.setRoot(TabPage);
    }
    else if (menuItem.title == 'Add Appointment'){
      this.nav.push(AddAppointmentPage);
    }
    else if (menuItem.title == 'Add clients') {
      this.nav.push(ClientsPage);
    }

    else if (menuItem.title == 'Appointment') {

      var USER_DATA = localStorage.getItem('USER-DATA')
      console.log("User-DATA", JSON.parse(USER_DATA))
      this.User_data = JSON.parse(USER_DATA)

      this.Api.getclientappoint(this.User_data.success["0"].id).subscribe(DATA => {

        this.nav.push(CalendarPage, {
          appointment: DATA
        });
      })    
    }

  }
  
}
