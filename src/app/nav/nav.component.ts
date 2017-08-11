import { Component, OnInit } from '@angular/core';

import { AuthService } from '../user/auth.service'
import { EventService } from '../shared/event.service'
import { ISession } from '../shared/event.model'

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  searchingTerm: string = "";
  foundSessions: ISession[] = [];
  constructor(private eventService: EventService, public auth: AuthService) { }


  ngOnInit() {
  }

  searchSessions(term) {
    this.eventService.searchSessions(term).subscribe(
      sessions => {
        this.foundSessions = sessions;
      });
  }
}
