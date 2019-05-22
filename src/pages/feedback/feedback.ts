import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { ApiProvider} from '../../providers/api/api';
import { HomePage} from '../home/home';

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {

  object:any

  Appointment = {}

  constructor(public navCtrl: NavController, public navParams: NavParams, public Api: ApiProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
 
    this.object = navParams.get('object')
    console.log("objects", this.object )

}


  Feedback(Appointment){



    // console.log("testing", userData)

    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      // duration: 2000
    });

    loader.dismiss();

    loader.present().then(() => {

    console.log("add", Appointment);

    if (Appointment.NotInterested === undefined){
      Appointment.NotInterested = "Not Selected";
      console.log("undefined", Appointment.NotInterested)
    }
    else{
      Appointment.NotInterested = "Not Interested";
    }

    if (Appointment.SendQuotation === undefined){
      Appointment.SendQuotation = "Not Selected";
      console.log("true", Appointment.SendQuotation)
    }
    else{
      Appointment.SendQuotation = "Send Quotation";
    }

    if (Appointment.others === undefined){
      Appointment.others = "No Comments"
    }
    else{
      Appointment.others

    }

    console.log("added", Appointment);

    var clientsappointment = { "CompanyName": this.object.CompanyName, "ContactNumber": this.object.ContactNumber, "EmailAddress": this.object.EmailAddress, "PersonsName": this.object.PersonsName, "feedback": Appointment.feedback, "SendQuotation": Appointment.SendQuotation, "NotInterested": Appointment.NotInterested, "Visited_Clients_DATE": "date", "client_appointment_ID": "1"}

    this.Api.postaddvisitedclients(clientsappointment).subscribe(DATA =>{

      console.log("DATA", DATA)

      loader.dismiss();

      let alert = this.alertCtrl.create({
        title: 'Sent',
        subTitle: 'Your Feedback has been sent Succesfully',
        buttons: [{
          text: 'Ok',
          handler: data => {
            console.log("DATA", data)
            console.log('Cancel clicked');
            this.navCtrl.setRoot(HomePage)
          }
        }]
      });
      alert.present();

    },(error)=>{

        loader.dismiss();


        console.log(error)
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'User ' + error.statusText,
          buttons: ['OK']
        });
        alert.present();
      
    })
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }

}
