import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdminsidemenuPage} from '../../pages/adminsidemenu/adminsidemenu';
import { UserPage} from '../user/user';
import { CategoryPage} from '../category/category';
import { LeaderboardPage} from '../leaderboard/leaderboard';

export interface MenuItem {
  title: string;
  component: any;
  icon: string;
}



@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})

export class AdminPage {

  //   /Users/rcm15 / helukabel_old2 2 / src / assets / imgs / avatar.jpeg

  // < !-- /Users/rcm15 / helukabel_old2 2 / src / assets / imgs / favicon.jpg-- >

  //   <!-- /Users/rcm15 / helukabel_old2 2 / src / assets / imgs / home.jpg-- >

  //     <!-- /Users/rcm15 / helukabel_old2 2 / src / assets / imgs / home2.jpg-- >

  // shops = [
  //   { "name": "Users", "img":"assets/imgs/home2.jpg"},
  //   { "name": "Categories", "img": "assets/imgs/home2.jpg" },
  //   { "name": "Leader Board", "img": "assets/imgs/home2.jpg" }
  // ]

  appMenuItems: Array<MenuItem>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
    var admin = localStorage.getItem('admin')
    console.log("admin controller ", admin)

    this.appMenuItems = [
      { title: 'Users', component: UserPage, icon: 'people' },
      { title: 'Category', component: CategoryPage, icon: 'apps'},
      { title: 'Leader Board', component: LeaderboardPage, icon: 'clipboard' },
      // { title: 'Add clients', component: ClientsPage, icon: 'contact' },
      // { title: 'Add Appointment', component: AddAppointmentPage, icon: 'clipboard' },
      // { title: 'Appointment', component: CalendarPage, icon: 'calendar' },
      // { title: 'Clients visited', component: TabPage, icon: 'clipboard' }
    ];

    console.log("", this.appMenuItems )

  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }


  openMenu(){
    console.log('ionViewDidLoad AdminPage');
    this.navCtrl.setRoot(AdminsidemenuPage)
  }

  openPage(menuItem){
    console.log("", menuItem)
    
    if (menuItem.title === "Users"){
   
      this.navCtrl.push(UserPage)
     
    }
    else if (menuItem.title === "Category"){

      this.navCtrl.push(CategoryPage)

    }
    else if (menuItem.title === "Leader Board"){
   
      this.navCtrl.push(LeaderboardPage)

    }
  }
  

}
