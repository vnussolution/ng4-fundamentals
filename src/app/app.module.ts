import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
  RouterModule
} from '@angular/router';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms'
import { AlertModule } from 'ngx-bootstrap';
import {
  AppComponent
} from './app.component';
import {
  EventsListComponent
} from './events-list/events-list.component';
import {
  EventsThumbnailComponent
} from './events-thumbnail/events-thumbnail.component';
import {
  NavComponent
} from './nav/nav.component';
import {
  EventService
} from './shared/event.service';
import { TOASTR_TOKEN, JQ_TOKEN, Toastr } from './common/toastr.service';
import {
  CollapsibleWellComponent
} from './common/collapsible-well.component';
import {
  EventDetailsComponent
} from './event-details/event-details.component';
import {
  EventRouteActivator
} from './event-details/event-resolver.service';
import {
  appRoutes
} from './routes';
import {
  CreateEventComponent
} from './create-event/create-event.component';
import {
  Error404Component
} from './error/404.component';
import {
  EventListResolver
} from './events-list/events-list-resolver.service';
import {
  AuthService
} from './user/auth.service';
import {
  CreateSessionComponent
} from './event-details/create-session.component';
import {
  SessionListComponent
} from './event-details/session-list.component';
import {
  DurationPipe
} from './shared/duration.pipe';
import {
  SimpleModalComponent
} from './common/simple-modal.component';
import {
  ModalTriggerDirective
} from './common/modal-trigger.directive';



import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VotingComponent } from './event-details/voting.component';
import { VoterService } from './event-details/voter.service';
import { LocationValidatorDirective } from './create-event/location-validator.directive'
import { HttpModule } from '@angular/http'

declare let toastr: Toastr;
declare let jQuery: Object;
@NgModule({
  declarations: [AppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    VotingComponent,
    LocationValidatorDirective,
    ModalTriggerDirective],
  imports: [
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    // AlertModule.forRoot(),
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)],
  providers: [AuthService,
    VoterService,
    EventListResolver,
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    EventRouteActivator, {
      provide: 'canDeactivateCreateEvent', useValue: checkDirtyState,
    }
  ], bootstrap: [AppComponent]
}

) export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) return window.confirm('yes no ');
  return true;
}