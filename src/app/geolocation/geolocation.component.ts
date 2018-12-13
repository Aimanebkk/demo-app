import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css']
})
export class GeolocationComponent implements OnInit {
  position ;

  constructor() { }

  ngOnInit() {
  }

  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.position = position;
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

}
