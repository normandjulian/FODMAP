import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { HomeService } from './home.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeService]
})
export class HomePage {
  public list: any;
  public initial_list: any;

  public search_string: string = '';
  constructor(public navCtrl: NavController, public homeService: HomeService, public alertCtrl: AlertController) {

  }

  onInput(param) {
    this.list = this.homeService.get_empty_list();

    for (let alpha in this.initial_list) {
      for (let aliment of this.initial_list[alpha]) {
        if (aliment.name.toUpperCase().includes(this.search_string.toUpperCase())) {
          this.list[alpha].push(aliment);
        };
      }
    }
  }

  show_description(description) {
    let alert = this.alertCtrl.create({
      subTitle: description,
      buttons: ['Ok']
    });
    alert.present();
  }

  ionViewDidLoad() {
    this.list = this.homeService.get_list();
    this.initial_list = this.homeService.get_list();
  }
}
