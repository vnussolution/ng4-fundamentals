import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ISession } from '../shared/event.model';
import { restrictedWords } from '../shared/restricted-words.validator'


@Component({
    selector: 'create-session',
    templateUrl: './create-session.component.html',
    styles: [`
    em {float:right; color: #e05c65; padding-left:10px;}
    .error input, .error select, .error textarea {background:#e3c3c5;}
    .error placeholder {color: #999;}
    `]
})
export class CreateSessionComponent implements OnInit {
    @Output() saveNewSession1 = new EventEmitter();
    @Output() cancelAddSession1 = new EventEmitter();

    name1: FormControl;
    presenter1: FormControl;
    duration1: FormControl;
    level1: FormControl;
    abstract1: FormControl;
    newSessionForm1: FormGroup;

    ngOnInit() {
        this.name1 = new FormControl('', Validators.required);
        this.presenter1 = new FormControl('', Validators.required);
        this.duration1 = new FormControl('', Validators.required);
        this.level1 = new FormControl('', Validators.required);
        this.abstract1 = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['bad', 'naughty', 'ugly'])]);

        this.newSessionForm1 = new FormGroup({
            name12: this.name1,
            presenter12: this.presenter1,
            duration12: this.duration1,
            level12: this.level1,
            abstract12: this.abstract1
        });
    }

    saveSession(formValue) {
        let session: ISession = {
            id: undefined,
            name: formValue.name12,
            duration: +formValue.duration12,
            level: formValue.level12,
            presenter: formValue.presenter12,
            abstract: formValue.abstract12,
            voters: []
        }
        this.saveNewSession1.emit(session);
    }

    cancel() {
        this.cancelAddSession1.emit();
    }
}
