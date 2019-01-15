import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Record } from '../../models/record';
import { FavouritesProvider } from '../../providers/favourites/favourites';

/**
 * Generated class for the MyFavouritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-favourites',
  templateUrl: 'my-favourites.html',
})
export class MyFavouritesPage {

  private recordList: Array<Record> = [];

  constructor(
              public navCtrl: NavController,
              public navParams: NavParams,
              private favouritesProvider: FavouritesProvider) {
  }

  ionViewWillEnter() {
    this.recordList = [];
    this.recordList = this.favouritesProvider.getStoredRecords();
    console.log(this.recordList);
  }

}
