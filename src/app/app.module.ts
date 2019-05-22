import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';



// import { AngularFireModule } from "angularfire2";
// import { AngularFireDatabaseModule } from "angularfire2/database";

import { NgCalendarModule } from 'ionic2-calendar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {LeaderboardPage} from '../pages/leaderboard/leaderboard'
import {ProductPage} from '../pages/product/product';
import {ProductitemsPage} from '../pages/productitems/productitems';
import {NotificationsPage} from '../pages/notifications/notifications';

import { ApiProvider } from '../providers/api/api';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

// import { Network } from '@ionic-native/network';
import { ViewPage} from '../pages/view/view';
import { SendquotePage} from '../pages/sendquote/sendquote';
import { AddqtyPage} from '../pages/addqty/addqty';
import { AdddiscountPage} from '../pages/adddiscount/adddiscount';
import { OutstandingPage} from '../pages/outstanding/outstanding';
import { InvoicePage} from '../pages/invoice/invoice';
import {ProfilePage} from '../pages/profile/profile';

import { Camera } from '@ionic-native/camera/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';

import { TabPage} from '../pages/tab/tab';
 
import { EditinfoPage} from '../pages/editinfo/editinfo';
import { AppointmentPage } from '../pages/appointment/appointment';

import { CalendarPage} from '../pages/calendar/calendar';

import {AddAppointmentPage} from '../pages/add-appointment/add-appointment';
import { ClientsPage} from '../pages/clients/clients';

import { FeedbackPage} from '../pages/feedback/feedback';

import {AdminPage} from '../pages/admin/admin';
import {AdminsidemenuPage} from '../pages/adminsidemenu/adminsidemenu';
import { UserPage} from '../pages/user/user';
import { CategoryPage} from '../pages/category/category';
import { UserEditDeletePage} from '../pages/user-edit-delete/user-edit-delete';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    LeaderboardPage,
    ProductPage,
    ProductitemsPage,
    NotificationsPage,
    ViewPage,
    SendquotePage,
    AddqtyPage,
    AdddiscountPage,
    OutstandingPage,
    InvoicePage,
    ProfilePage,
    TabPage,
    EditinfoPage,
    AppointmentPage,
    CalendarPage,
    AddAppointmentPage,
    ClientsPage,
    FeedbackPage,
    AdminPage,
    AdminsidemenuPage,
    UserPage, 
    CategoryPage,
    UserEditDeletePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    NgCalendarModule,
    IonicModule.forRoot(MyApp),
    //     AngularFireModule.initializeApp({
    //       apiKey: "AIzaSyCznBPV2A_rxjsZ6ZQSfCRTV3C9jfL3gDw",
    //       authDomain: "fdmapp-a3271.firebaseapp.com",
    //       databaseURL: "https://fdmapp-a3271.firebaseio.com",
    //       projectId: "fdmapp-a3271",
    //       storageBucket: "fdmapp-a3271.appspot.com",
    //       messagingSenderId: "747748924182" 
    // }),
    // AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    LeaderboardPage,
    ProductPage,
    ProductitemsPage,
    NotificationsPage,
    ViewPage,
    SendquotePage,
    AddqtyPage,
    AdddiscountPage,
    OutstandingPage,
    InvoicePage,
    ProfilePage,
    TabPage,
    EditinfoPage,
    AppointmentPage,
    CalendarPage,
    AddAppointmentPage,
    ClientsPage,
    FeedbackPage,
    AdminPage,
    AdminsidemenuPage,
    UserPage,
    CategoryPage,
    UserEditDeletePage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen, 
    Camera,
    FileTransfer,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    // Network,
  ]
})
export class AppModule {}
