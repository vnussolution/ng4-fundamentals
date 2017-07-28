import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events1: any;


  constructor(private eventSerivce: EventService) { }

  ngOnInit() {
    this.events1 = this.eventSerivce.getEvents();
  }

  handleEventClicked(data) {
    console.log('received:', data);
  }
}
