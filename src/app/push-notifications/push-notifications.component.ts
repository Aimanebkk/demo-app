import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { PushNotificationService } from '../_services/push-notification.service';

@Component({
  selector: 'app-push-notifications',
  templateUrl: './push-notifications.component.html',
  styleUrls: ['./push-notifications.component.css']
})
export class PushNotificationsComponent implements OnInit {
  sub: PushSubscription;
  readonly VAPID_PUBLIC_KEY = "BNMKU--5TbdI2NX7QW0sD8bAfEK4pZ8dOoolko8HOPpjIiAMzOcWOG9P9iTBZE9Icf42hEL7W18EbcniKyvfWvg";

  constructor(private swPush: SwPush, private newsletterService: PushNotificationService) { }

  ngOnInit() {
  }

  subscribeToNotifications() {
    this.swPush.requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY
    })
    .then(sub => { 
      this.sub = sub ;
      this.newsletterService.addPushSubscriber(sub).subscribe()
    })
    .catch(err => console.error("Could not subscribe to notifications", err));
  }

  sendNewsletter() {
    console.log("Sending Newsletter to all Subscribers ...");
    this.newsletterService.send().subscribe();
  }

}
