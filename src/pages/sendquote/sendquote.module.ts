import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendquotePage } from './sendquote';

@NgModule({
  declarations: [
    SendquotePage,
  ],
  imports: [
    IonicPageModule.forChild(SendquotePage),
  ],
})
export class SendquotePageModule {}
