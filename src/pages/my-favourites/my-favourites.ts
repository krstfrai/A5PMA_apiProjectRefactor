import { Component, QueryList } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Record } from '../../models/record';
import { FavouritesProvider } from '../../providers/favourites/favourites';

import {ViewChildren} from '@angular/core';

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
  private itemID: string;

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

  deleteFromFavourite(event) {
    //get id of item we want to delete
    this.itemID = event.target.id || event.target.parentNode.id;
    this.favouritesProvider.deleteRecord(this.itemID);
    
    //Delete item from DOM
    event.target.closest("ion-item").remove();
  }

  // Delete all items from memory
  deleteAllItems() {
    this.favouritesProvider.clearStorage();

    //Reload the page after deleting the items
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

}
