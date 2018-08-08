import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimeTrackPage } from './time-track';

@NgModule({
  declarations: [
    TimeTrackPage,
  ],
  imports: [
    IonicPageModule.forChild(TimeTrackPage),
  ],
})
export class TimeTrackPageModule {}
