import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { EventService } from '../shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { IEvent } from '../shared/event.model'

@Component({
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events1: IEvent[];


  constructor(private eventSerivce: EventService,
    private toastrService: ToastrService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.events1 = this.route.snapshot.data['eventsRX']
    // this.eventSerivce.getEvents().subscribe(events => this.events1 = events);
  }

  handleEventClicked(eventName) {
    console.log('received:', eventName);
    this.toastrService.success('great..123 ' + eventName, 'my title');
  }
}
