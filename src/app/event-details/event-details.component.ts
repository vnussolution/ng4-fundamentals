import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

import { EventService } from '../shared/event.service';
import { IEvent, ISession } from '../shared/event.model';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filteredBy: string = 'all';
  sortBy: string = 'name'

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {

    // do this to make params observable, fix the issue in modal when clicking on item
    this.route.params.forEach((params: Params) => {
      this.eventService.getEvent(+params['id']).subscribe((event: IEvent) => {
        this.event = event;
        this.addMode = false;
      });
      // this.event = this.eventService.getEventOld(+params['id']);
    });

    //  snapshot is not observable
    //this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession2(session: ISession) {
    let nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.saveEvent(this.event).subscribe();
    this.addMode = false;
  }

  cancelAddSession2() {
    this.addMode = false;
  }
}
