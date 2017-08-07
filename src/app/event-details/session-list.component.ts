import { Component, Input, OnChanges } from '@angular/core';

import { ISession } from '../shared/event.model'
import { AuthService } from '../user/auth.service';
import { VoterService } from './voter.service';

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html',
    styles: [`
    collapsible-well h6 {margin-top: -5px; margin-bottom:10px;}
    `]
})

export class SessionListComponent implements OnChanges {
    @Input() mySessions: ISession[];
    @Input() filteredBy1: string;
    @Input() sortBy1: string;
    @Input() eventId: number;

    visiableSessions: ISession[] = [];

    constructor(private authService: AuthService, private voterService: VoterService) { }

    ngOnChanges() {
        if (this.mySessions) {
            this.filterSessions(this.filteredBy1);
            console.log('sessionlistcomponent', this.sortBy1);
            this.sortBy1 === 'name' ? this.visiableSessions.sort(sortByNameAsc) : this.visiableSessions.sort(sortByVotesDesc);
        }
    }

    filterSessions(filter) {
        if (filter === 'all') {
            this.visiableSessions = this.mySessions.slice(0);

        } else {
            this.visiableSessions = this.mySessions.filter(s => { return s.level.toLocaleLowerCase() === filter; });
        }
    }

    clickVote(session: ISession) {
        if (this.usersVoted(session)) {
            this.voterService.deleteVoter(this.eventId, session, this.authService.currentUser.userName);
        } else {
            console.log(this.eventId, session, this.authService.currentUser.userName);
            this.voterService.addVoter(this.eventId, session, this.authService.currentUser.userName);
        }

        if (this.sortBy1 === 'votes')
            this.visiableSessions.sort(sortByVotesDesc);
    }

    usersVoted(session: ISession) {
        return this.voterService.userHasVoted(session, this.authService.currentUser.userName);
    }

}

function sortByNameAsc(s1: ISession, s2: ISession) {
    if (s1.name > s2.name) return 1;
    else if (s1.name === s2.name) return 0;
    else return -1;
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length;

}