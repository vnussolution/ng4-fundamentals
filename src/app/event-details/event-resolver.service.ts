
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router, CanActivate } from '@angular/router';
import { EventService } from '../shared/event.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class EventResolver implements Resolve<any>{
    constructor(private eventService: EventService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot) {
        let eventExist = this.eventService.getEvent(route.params['id']);
        if (!eventExist) {
            this.router.navigate(['/404']);
        }
        return eventExist;

    }
}




@Injectable()
export class EventRouteActivator implements CanActivate {

    constructor(private eventService: EventService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot) {
        let event;
        // this.eventService.getEvent(Number(route.params['id'])).subscribe(e => {
        //     event = e;
        //     console.log(event, route.params['id']);
        //     if (!event) {
        //         this.router.navigate(['/404']);
        //     }
        // });
        event = this.eventService.getEventOld(+route.params['id']);
        if (!event)
            this.router.navigate(['/404']);

        return !!event;
    }
}

