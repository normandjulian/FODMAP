import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {HomeService} from '../home/home.service';

/**
 * Generated class for the Vegetable page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-vegetable',
  templateUrl: '../home/home.html',
  providers: [HomeService]
})
export class VegetablePage {
  public list: any;
  public initial_list: any;
  public search_string: string = '';
  public title: string = 'Légumes';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public homeService: HomeService) {
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

  ionViewDidLoad() {
    this.list = this.homeService.get_vegetables();
    this.initial_list = this.homeService.get_vegetables();
  }
}
