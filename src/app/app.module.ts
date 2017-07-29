import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';


import { AlertModule } from 'ngx-bootstrap';
// import { ToastrModule, ToastrService } from 'ngx-toastr';
//import {  } from 'toastr'

import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventsThumbnailComponent } from './events-thumbnail/events-thumbnail.component';
import { NavComponent } from './nav/nav.component';
import { EventService } from './shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventRouteActivator } from './event-details/event-route-activator.service';
import { appRoutes } from './routes';
import { CreateEventComponent } from './create-event/create-event.component';
import { Error404Component } from './error/404.component';


@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService, ToastrService, EventRouteActivator,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('yes no ');
  return true;
}
