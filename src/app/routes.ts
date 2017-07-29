
import { Routes } from '@angular/router';


import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventRouteActivator } from './event-details/event-route-activator.service';
import { CreateEventComponent } from './create-event/create-event.component';
import { Error404Component } from './error/404.component';
import { EventListResolver } from './events-list/events-list-resolver.service'


export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: { eventsRX: EventListResolver } },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
]