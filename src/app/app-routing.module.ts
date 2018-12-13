import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PushNotificationsComponent } from './push-notifications/push-notifications.component';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { CameraComponent } from './camera/camera.component';

const routes: Routes = [
  {
    path: 'push-notifications',
    component: PushNotificationsComponent,
  },
  {
    path: 'geolocation',
    component: GeolocationComponent,
  },
  {
    path: 'camera',
    component: CameraComponent,
  },

  // otherwise redirect to home
  { path: '**', redirectTo: 'push-notifications' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
