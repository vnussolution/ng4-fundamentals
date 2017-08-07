import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'voting',
    template: `
    <div class="votingWidgetContainer pointable" (click)="onClick()">
        <div class="well votingWidget">
            <div class="votingButton">
                <i [style.color]="iconColor"  class="glyphicon glyphicon-heart"></i>
                
                <i *ngIf="false" class="glyphicon glyphicon-heart-empty"></i>
            </div>
            <div class="badge badge-inverse votingCount">
                <div>{{count}}</div>
            </div>
        </div>
    </div>

    `,
    styleUrls: ['./voting.component.css']
})
export class VotingComponent {
    @Input('countVote') count: number;
    @Input('didVote') set voted(val) {
        this.iconColor = val ? 'red' : 'white';
    }
    @Output('voteEvent') vote = new EventEmitter();
    iconColor: string;

    constructor() { }

    onClick() {
        this.vote.emit({});

    }

}

