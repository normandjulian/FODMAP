import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { Dictionnary } from '../../providers/dictionnary';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public list: any;
  public initial_list: any;
  public search_string: string = '';
  public title: string = 'F.O.D.M And P';

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public dictionnary: Dictionnary) {}

  onInput(param) {
    this.list = this.dictionnary.get_empty_list();

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
    this.list = this.dictionnary.get_list();
    this.initial_list = this.dictionnary.get_list();
  }
}
