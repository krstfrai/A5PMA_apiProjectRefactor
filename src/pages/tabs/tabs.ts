import { Component } from '@angular/core';

import { MyFavouritesPage } from '../my-favourites/my-favourites';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MyFavouritesPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
