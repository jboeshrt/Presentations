import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoundationPage } from './foundation';

@NgModule({
  declarations: [
    FoundationPage,
  ],
  imports: [
    IonicPageModule.forChild(FoundationPage),
  ],
})
export class FoundationPageModule {}
