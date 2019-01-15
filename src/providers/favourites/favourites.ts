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

  constructor(private storage: Storage) {
    console.log('Hello FavouritesProvider Provider');
    this.storage.clear();
  }

  // Save record to device storage
  saveRecord(item:any, type: string) {
    // Generate ID
    let id = this.recordList.length.toString();
    console.log(id);

    // Create Record instance
    this.record = new Record((type !== 'audiobook') ? item.trackName : item.collectionName, item.artistName, item.artworkUrl100, type, item.collectionViewUrl);
    this.recordList.push(this.record);
    console.log(this.record);

    // Save Record to storage
    this.storage.set(id, item)
      .then(() => console.log(this.storage.keys()));
  }
  

  // Save to memory

  // Retrieve all items from memory

  // Delete item from memory

}
