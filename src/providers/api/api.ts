import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';




@Injectable()
export class ApiProvider {

  respond:any

  defaultUrl: any = "http://flawlessdigitalmarketing.co.za/api/index.php/user/";

  //login
  Login = this.defaultUrl + "FDMLogin"

  AdminUsers = this.defaultUrl + "adminFDMgetallusers"



  //Category
  Categories = this.defaultUrl + "FDMcategory/parent_id";

  //Sub category
  SubCategory = this.defaultUrl + "FDMsubCategory/parent_id/" ;

  //Products
  Products = this.defaultUrl + "/FDMproducts/id/";
  
  //send quote
  SendQuote = this.defaultUrl + "/FDMsendquote";

  // send quote discount
  SendQuotediscount = this.defaultUrl + "/FDMsendquotediscount";

  // send outstanding balance   FDMsendinvoice
  SendOutstanding = this.defaultUrl + "/FDMsendOutstanding";

  //send invoice  FDMsendinvoice
  SendInvoice = this.defaultUrl + "/FDMsendinvoice";

  //post quote path and total quote
  Usersendquote = this.defaultUrl + "Usersendquote";

  //post quote path and total quote
  UserProfilePic = this.defaultUrl + "userprofile/id/";

  //update user details
  UpdateUserProfile = this.defaultUrl + "userupdate";

   //add clients information
  clientinfo = this.defaultUrl +  "AddUserClients";

  //get client info
  viewclientinfo = this.defaultUrl + "getclientinfo/user_id/";

  //post upudate client info
  updateclientinfo = this.defaultUrl + "updateuserclientinfo";
  
// http://flawlessdigitalmarketing.co.za/api/index.php/user/updateuserclientinfo

//post add appointment
  addappointment = this.defaultUrl + "AddClientsAppointments/";
  
  //get user appointment
  getuserappointment = this.defaultUrl + "getClientsAppointments/user_id/";

  //Add Visited Clients
  addvisitedclients = this.defaultUrl + "AddVisitedClients/";



  constructor(public http: Http) {
    console.log('Hello ApiProvider Provider');
  }

  getadminUsers(){
    this.respond = this.http.get(this.AdminUsers).map(res => res.json())
    return this.respond;
  }

  postaddvisitedclients(add){
    this.respond = this.http.post(this.addvisitedclients , add).map(res => res.json())
    return this.respond
  }

  getclientappoint(id) {
    this.respond = this.http.get(this.getuserappointment + id).map(res => res.json())
    return this.respond
  }


  postaddappointment(appointment){

    this.respond = this.http.post(this.addappointment, appointment).map(res => res.json());
    return this.respond;
  }

  postupdateclientinfo(data){
 
    this.respond = this.http.post(this.updateclientinfo, data).map(res => res.json());
    return this.respond;

  }

  getclientinfo(id){

    this.respond = this.http.get(this.viewclientinfo + id).map(res => res.json())
    return this.respond;

  }

  postClientinfo(info){

    this.respond =  this.http.post(this.clientinfo, info).map( res => res.json())
    return this.respond ;

  }

  postupdateuserprofile(data){
    this.respond = this.http.post(this.UpdateUserProfile, data).map(res => res.json())
    return this.respond
  }


  getProfilePic(id) {
    this.respond = this.http.get(this.UserProfilePic + id).map(res => res.json())
    return this.respond
  }

  postUsersendquote(quote){

    this.respond = this.http.post(this.Usersendquote, quote).map(res => res.json())
    return this.respond

  }

  postSendInvoice(send) {
    this.respond = this.http.post(this.SendInvoice, send).map(res => res.json())
    return this.respond
  }

  postSendOutstanding(send){
    this.respond = this.http.post(this.SendOutstanding, send).map(res => res.json())
    return this.respond 
  }

  postSendQuotediscount(send){
    this.respond = this.http.post(this.SendQuotediscount, send).map(res => res.json())
    return this.respond 
  }

  postSendQuote(send){
    this.respond = this.http.post(this.SendQuote ,send).map(res => res.json())
    return this.respond 

  }

  getProducts(id){
    this.respond = this.http.get(this.Products + id).map(res => res.json())
    return this.respond 

  }

  getSubCategory(id){

    this.respond = this.http.get(this.SubCategory+id).map(res => res.json())
    return this.respond 

  }
 
  //category get function
  getCategories(){
   
   this.respond =  this.http.get(this.Categories).map(res => res.json())
   return this.respond

  }

  //login post function
  postLogin(Login) {

    this.respond = this.http.post(this.Login, Login).map(res => res.json())
    return this.respond


  }


}
