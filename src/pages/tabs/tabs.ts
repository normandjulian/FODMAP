import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { FruitPage } from '../fruit/fruit';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FruitPage;

  constructor() {

  }
}
