import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ToastrService } from '../common/toastr.service'
import { EventService } from '../shared/event.service';
import { IEvent } from '../shared/event.model'

@Component({
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events1: IEvent[];
  myAlert: boolean;


  constructor(private eventSerivce: EventService,
    //  @Inject(TOASTR_TOKEN) private toastr: Toastr,
    private toastr: ToastrService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.events1 = this.route.snapshot.data['eventsRX']
    // this.eventSerivce.getEvents().subscribe(events => this.events1 = events);
  }

  handleEventClicked(eventName) {
    console.log('received:', eventName);
    this.toastr.success('great..123 ' + eventName, 'my title');
  }
  showAlert() {
    this.myAlert = false;
  }
}
