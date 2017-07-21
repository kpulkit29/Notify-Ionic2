import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { HomePage } from '../pages/home/home';
import { Service } from "../providers/service";
import { Score } from "../pages/score/score";
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Score
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Score
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},LocalNotifications,Service
  ]
})
export class AppModule {}
