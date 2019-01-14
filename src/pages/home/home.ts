import { Component } from '@angular/core';
import { NavController, Toast } from 'ionic-angular';

import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private searchTerm: string = '';
  private mediaType: string = 'music';

  constructor(public navCtrl: NavController, private toastCtrl: ToastController) {

  }

  // 1. Get Input Data
  sendData() {
    if(this.searchTerm !== '' && this.mediaType !== '') {

    } else {
      this.presentToast();
    }
  }
  // 2. Send Request to API

  // 3. Get response and parse

  // 4. Display Data


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
