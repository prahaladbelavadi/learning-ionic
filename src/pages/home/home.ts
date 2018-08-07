import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }
    presentConfirm() {
      let alert = this.alertCtrl.create({
        title: 'confirm Purchase',
        message: 'Do you want to buy this ?',
        buttons:[
          {
            text: 'cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel Clicked')
            }
          },
          {
            text: 'buy',
            handler: () => {
              console.log('Buy clicked');
            }
          }
        ]
      });
      alert.present();
    }


}
