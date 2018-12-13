import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { PushNotificationsComponent } from './push-notifications/push-notifications.component';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { CameraComponent } from './camera/camera.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PushNotificationsComponent,
    GeolocationComponent,
    CameraComponent,
    MainComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
