import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {PendienteComponent} from '../pages/pendientes/pendientes.component';
import {TerminadoComponent} from '../pages/terminados/terminados.component';
import { AgregarComponent } from '../pages/agregar/agregar.component';

import { ListaDeseosService } from "./services/lista-deseos.service";

import { PlaceholderPipe } from './pipes/placeholder.pipe';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendienteComponent,
    TerminadoComponent,
    AgregarComponent,
    PlaceholderPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendienteComponent,
    TerminadoComponent,
    AgregarComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListaDeseosService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
