import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { MenuPage } from '../pages/menu/menu';
import { HomePage } from '../pages/home/home';
import { FruitPage } from '../pages/fruit/fruit';
import { VegetablePage } from '../pages/vegetable/vegetable';
import { LeguminousPage } from '../pages/leguminous/leguminous';
import { FeculentPage } from '../pages/feculent/feculent';
import { MilkyPage } from '../pages/milky/milky';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  public pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Tout les aliments', component: HomePage },
      { title: 'Fruits', component: FruitPage },
      { title: 'Légumes', component: VegetablePage },
      { title: 'Légumineux', component: LeguminousPage },
      { title: 'Féculents', component: FeculentPage },
      { title: 'Produits laitiers', component: MilkyPage }
    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
