import { Component, Input } from '@angular/core';


@Component({
    selector: 'collapsible-well',
    template: `
    <div (click)="toggleContent()" class="well pointable">
        <h4>
            <ng-content select="[well-title]"></ng-content>
        </h4>
        <ng-content *ngIf="visiable" select="[well-body]"></ng-content>
    </div>
    `
})
export class CollapsibleWellComponent {
    visiable: boolean = true;

    toggleContent() {
        this.visiable = !this.visiable;
    }

}


