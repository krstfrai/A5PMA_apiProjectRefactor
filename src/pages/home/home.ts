import { Component } from '@angular/core';
import { NavController, Toast } from 'ionic-angular';

import { ToastController } from 'ionic-angular';
import { RequestProvider } from '../../providers/request/request'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private searchTerm: string = '';
  private mediaType: string = 'music';
  private searchResult: Array<any>;

  constructor(public navCtrl: NavController, private toastCtrl: ToastController, private requestProvider: RequestProvider) {

  }

  // 1. Get Input Data
  retrieveData(search:string, type:string) {
    if(this.searchTerm !== '' && this.mediaType !== '') {

      // 2. Send Request to API
      this.requestProvider.sendRequest(`https://itunes.apple.com/search?term=${search}&media=${type}&callback=JSONP_CALLBACK`)
      // 3. Get response and parse
      .subscribe(data => {
        let parsedData = data.json();
        this.searchResult = parsedData.results;
        console.log(this.searchResult);
      });
    } else {
      this.presentToast();
    }
  }


  // Toast Message
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Please enter Search term and Media type',
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
  }

}
