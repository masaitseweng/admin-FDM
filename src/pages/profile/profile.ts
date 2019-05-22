import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
// import { format } from 'path';
import { ApiProvider } from '../../providers/api/api'

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileTransfer,  } from '@ionic-native/file-transfer/ngx';

// FileUploadOptions, FileTransferObject



@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  USERDATA:any
  userdata:any


 
  userData ={}

  name: any
  surname:any
  email:any
  cellnumber:any
  password:any
  profile_pic:any

  //change this
  myphoto:any

  one:any
  update:any


  constructor(public navCtrl: NavController, public navParams: NavParams, public Api: ApiProvider, public loadingCtrl: LoadingController, public alertCtrl: AlertController, private camera: Camera, private transfer: FileTransfer,) {

  

    var key = localStorage.getItem('USER-DATA')

    this.USERDATA = JSON.parse(key)

    this.Api.getProfilePic(this.USERDATA.success["0"].id).subscribe(DATA => {
      console.log("DATA", DATA)

      this.userdata = DATA
      console.log("data", this.userdata)
      console.log("name", this.userdata["0"].name )
      this.name = this.userdata["0"].name
      this.surname = this.userdata["0"].surname 
      this.email = this.userdata["0"].email
      this.cellnumber = this.userdata["0"].cellnumber
      this.password = this.userdata["0"].password 
      this.profile_pic = this.userdata["0"].profile_pic 
      // console.log("pic", this.profile_pic)
      
    }) 
  

  }


// Photo(){

//   const options: CameraOptions = {
//     quality: 100,
//     destinationType: this.camera.DestinationType.FILE_URI,
//     encodingType: this.camera.EncodingType.JPEG,
//     mediaType: this.camera.MediaType.PICTURE
//   }

//   this.camera.getPicture(options).then((imageData) => {
//     // imageData is either a base64 encoded string or a file URI
//     // If it's base64 (DATA_URL):
//     this.profile_pic = 'data:image/jpeg;base64,' + imageData;
//     console.log("error", this.profile_pic)
//   }, (err) => {
//       console.log("error", err)
//     // Handle error
//   });
// }

  Photo() {

    const confirm = this.alertCtrl.create({
      title: 'Option',
      buttons: [
        {
          text: 'Take photo',
          handler: () => {

            let loading = this.loadingCtrl.create({
              content: 'Please wait...1'
            });

            loading.present();


            // console.log('Disagree clicked');
            const options: CameraOptions = {
              quality: 100,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            }

            this.camera.getPicture(options).then((imageData) => {
              loading.dismiss();
              this.myphoto = 'data:image/jpeg;base64,' + imageData;

              console.log("image URL", this.myphoto)
              this.profile_pic = this.myphoto
              console.log("one", this.profile_pic)

            }, (err) => {
              loading.dismiss();
              console.log("hello", err)

            });
          }
        },
        {
          text: 'Choose photo from Gallery',
          handler: () => {
            console.log('Agree clicked');

            let loading = this.loadingCtrl.create({
              content: 'Please wait...'
            });

            loading.present();
            const options: CameraOptions = {
              quality: 100,
              destinationType: this.camera.DestinationType.DATA_URL,
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
              saveToPhotoAlbum: false
            }

            this.camera.getPicture(options).then((imageData) => {
              // imageData is either a base64 encoded string or a file URI
              // If it's base64 (DATA_URL):
              loading.dismiss();
              this.myphoto = 'data:image/jpeg;base64,' + imageData;
              console.log("image URL", this.myphoto)
              this.profile_pic = this.myphoto
              console.log("one", this.profile_pic)

            }, (err) => {
              loading.dismiss();
              console.log("hello", err)

            });

          }
        }
      ]
    });
    confirm.present();

  }



  save(name, surname, email, cellnumber, passwordone, profile_pic ){
    console.log("data", name, surname, email, cellnumber, passwordone, profile_pic )

    if (name == name){

      this.name = name
      console.log("if", this.name)
    }
    else{
      this.name 
      console.log("else", this.name  )
    }

    if (surname == surname){

      this.surname = surname 
    }
    else{

      this.surname 
    }

    if (email == email){

      this.email = email

    }
    else{
      this.email
    }

    if (cellnumber == cellnumber){
      this.cellnumber =  cellnumber
    }
    else{
      this.cellnumber
    }
        
    if (profile_pic == profile_pic ){

      this.profile_pic = profile_pic

    }
    else{

      this.profile_pic

    }

    if (passwordone == undefined) {

      passwordone = this.password

       this.password = passwordone 
      console.log("if-2", passwordone)

    }
    else {

      this.password = passwordone 

      console.log("", this.password)

    }


    this.update = { "id": this.userdata["0"].id, "name":this.name, "surname":this.surname, "email":this.email, "cellnumber":this.cellnumber, "password":this.password, "profile_pic":this.profile_pic}

    var formData = new FormData();

    formData.append("id", this.userdata["0"].id);
    formData.append("name", this.name);
    formData.append("surname", this.surname); 
    formData.append("email",this.email);
    formData.append("cellnumber",this.cellnumber);  
    formData.append("password", this.password);
    formData.append("profile_pic", this.profile_pic); 

    
       
    console.log("view", formData)

    this.Api.postupdateuserprofile(formData).subscribe(DATA =>{
      console.log("updated", DATA )
    },(error) =>{
        console.log("error updating", error)
    })


  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
