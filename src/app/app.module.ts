import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FruitPage } from '../pages/fruit/fruit';
import { VegetablePage } from '../pages/vegetable/vegetable';
import { LeguminousPage } from '../pages/leguminous/leguminous';
import { FeculentPage } from '../pages/feculent/feculent';
import { MilkyPage } from '../pages/milky/milky';
import { AboutPage } from '../pages/about/about';

import { Dictionnary } from '../providers/dictionnary';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VegetablePage,
    LeguminousPage,
    FeculentPage,
    MilkyPage,
    AboutPage,
    FruitPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VegetablePage,
    LeguminousPage,
    FeculentPage,
    MilkyPage,
    AboutPage,
    FruitPage
  ],
  providers: [
    StatusBar,
    Dictionnary,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
