import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LazloadPage } from './lazload';

@NgModule({
  declarations: [
    LazloadPage,
  ],
  imports: [
    IonicPageModule.forChild(LazloadPage),
  ],
})
export class LazloadPageModule {}
