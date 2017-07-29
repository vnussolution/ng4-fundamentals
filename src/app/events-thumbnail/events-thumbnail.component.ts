import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'events-thumbnail',
  templateUrl: './events-thumbnail.component.html',
  styleUrls: ['./events-thumbnail.component.css']
})
export class EventsThumbnailComponent implements OnInit {
  @Input('event2') event: any;
  @Output() eventClick11 = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    this.eventClick11.emit(this.event.name);
  }

  getStartTimeClass(e) {
    if (e && e.time === '8:00 am') {
      return ['green', 'bold'];
    }
    return [];
  }

  getNameStyle(): any {
    if (this.event && this.event.name === 'ng-nl') {
      return { color: 'red', 'font-weight': '900' };
    }
    return {};
  }
}
