import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrService } from '../common/toastr.service';

@Component({
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events1: any;


  constructor(private eventSerivce: EventService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.eventSerivce.getEvents().subscribe(events => this.events1 = events);
  }

  handleEventClicked(eventName) {
    console.log('received:', eventName);
    this.toastrService.success('great..123 ' + eventName, 'my title');
  }
}
