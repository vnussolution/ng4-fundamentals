import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router'

import { EventService } from '../shared/event.service'

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styles: [`
    em {float:right; color: #e05c65; padding-left:10px;}
    .error input {background:#e3c3c5;}
    .error placeholder {color: #999;}
    `]
})
export class CreateEventComponent implements OnInit {
  isDirty: boolean = true;
  newEventForm: any;
  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit() {
  }
  cancel() {
    this.router.navigate(['/events']);
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues).subscribe(e => {
      this.router.navigate(['/events']);
      this.isDirty = false;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('create-event', this.newEventForm)
  }
}
