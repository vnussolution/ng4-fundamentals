import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'

import { ISession } from '../shared/event.model';
import { Observable } from 'rxjs/Observable'


@Injectable()
export class VoterService {

    constructor(private http: Http) { }
    deleteVoter(eventId: number, session: ISession, voterName: string) {
        session.voters = session.voters.filter(v => v !== voterName);
        this.http.delete(`https://young-ravine-79636.herokuapp.com/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`)
            .catch(this.handleError).subscribe();

    }

    addVoter(eventId: number, session: ISession, voterName: string) {
        session.voters.push(voterName);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let url = `https://young-ravine-79636.herokuapp.com/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        this.http.post(url, {}, options).catch(this.handleError).subscribe();

    }

    userHasVoted(session: ISession, voterName: string) {
        return session.voters.some(v => v === voterName);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}


