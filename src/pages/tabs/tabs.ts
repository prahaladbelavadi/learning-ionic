import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { Page1Page} from '../page1/page1';
import { TimeTrackPage } from '../time-track/time-track'
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = Page1Page;
  tab5Root = TimeTrackPage;

  constructor() {

  }
}
