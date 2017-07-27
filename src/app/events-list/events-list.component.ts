import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  event1 = {
    id: 1,
    name: 'frankie',
    date: '3/11/2012',
    time: '10:10 am',
    price: 434.34,
    imageUrl: '/app/assets/images/angularconnect-shield.png',
    location: {
      address: '12345 dt',
      city: 'Vietnam',
      country: 'England'
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
