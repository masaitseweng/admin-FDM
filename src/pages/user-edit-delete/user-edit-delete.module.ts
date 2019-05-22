import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserEditDeletePage } from './user-edit-delete';

@NgModule({
  declarations: [
    UserEditDeletePage,
  ],
  imports: [
    IonicPageModule.forChild(UserEditDeletePage),
  ],
})
export class UserEditDeletePageModule {}
