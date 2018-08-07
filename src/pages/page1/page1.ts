import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Page1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
})
export class Page1Page {

 appType = 'Paid';
 safari = 'Shared Links';
 weather = 'sunny';

 selectionItems: any = {
   'Paid': [
     {
       name: 'Monopoly',
       price: '$0.99'
     },
     {
       name: 'Angry Birds',
       price: '$2.99'
     }
   ],
   'Free': [
     {
       name: 'Snapchat',
       price: 'GET'
     },
     {
       name: 'Instagram',
       price: 'OPEN'
     }
   ],
   'Top': [
     {
       name: 'Spotify',
       price: 'OPEN'
     },
     {
       name: 'Pandora',
       price: 'GET'
     }
   ]
 };

 ReadItems: any = {
   'Bookmarks': [
     {
       name: 'Favorites',
       icon: 'ios-star-outline'
     },
     {
       name: 'History',
       icon: 'ios-clock-outline'
     }
   ],
   'Reading List': [
     {
       name: 'Terms of Service',
       icon: 'create'
     },
     {
       name: 'User Guide',
       icon: 'book'
     }
   ],
   'Shared Links': [
     {
       name: 'Ionic Framework',
       icon: 'ionic'
     },
     {
       name: 'Learn Angular',
       icon: 'logo-angular'
     }
   ]
 };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page1Page');
  }

}
