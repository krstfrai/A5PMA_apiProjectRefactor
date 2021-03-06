import { Injectable } from '@angular/core';

import { Record } from '../../models/record';
import { Storage } from '@ionic/storage';

/*
  Generated class for the FavouritesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavouritesProvider {

  record: Record;
  recordList: Array<Record> = [];
  itemID: string;

  constructor(private storage: Storage) {
    console.log('Hello FavouritesProvider Provider');
    this.storage.clear();
  }

  // Save record to device storage
  saveRecord(item: any, type: string) {
    // Generate ID
    this.storage.keys()
      .then(keys => {
        if (keys.length === 0) {
          this.itemID = '0';
        } else {
          let keysNum = keys.map(x => parseInt(x));
          this.itemID = (Math.max(...keysNum) + 1).toString();
        }

        // Create Record instance
        this.record = new Record((type !== 'audiobook') ? item.trackName : item.collectionName, item.artistName, item.artworkUrl100, type, item.collectionViewUrl, this.itemID);

        // Save Record to storage
        this.storage.set(this.itemID, this.record);
      });

  }

  // Retrieve all items from memory
  getStoredRecords(): Array<Record> {
    this.recordList = [];
    this.storage.forEach((element, index) => {
      this.recordList.push(element);
    })
    return this.recordList;
  }

  // Delete item from memory
  deleteRecord(id: string) {
    this.storage.remove(id);
  }

  // Clear storage - delete all items
  clearStorage() {
    this.storage.clear();
  }
}
