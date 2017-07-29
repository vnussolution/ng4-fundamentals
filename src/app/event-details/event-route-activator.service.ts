import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router'
import { Injectable } from '@angular/core'
import { EventService } from '../shared/event.service';


@Injectable()
export class EventRouteActivator implements CanActivate {

    constructor(private eventService: EventService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot) {
        let eventExist = !!this.eventService.getEvent(Number(route.params['id']));
        console.log(eventExist, route.params['id']);
        if (!eventExist) {
            this.router.navigate(['/404']);
        }
        return eventExist;
    }
}




