import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {

  constructor(private http: HttpClient) { }

  addPushSubscriber(sub:any) {
    return this.http.post(environment.apiUrl + '/webpush/notifications', sub);
  }

  send() {
    const notificationPayload = {
      "notification": {
          "title": "Angular News",
          "body": "Newsletter Available!",
          "icon": "assets/main-page-logo-small-hat.png",
          "vibrate": [100, 50, 100],
          "data": {
              "dateOfArrival": Date.now(),
              "primaryKey": 1
          },
          "actions": [{
              "action": "explore",
              "url":"http://127.168.0.1:8080",
              "title": "Go to the site"
          }]
      }
  };
    return this.http.post(environment.apiUrl + '/webpush/newsletter', notificationPayload);
  }
}
