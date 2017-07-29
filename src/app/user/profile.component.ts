import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'

import { AuthService } from './auth.service'


@Component({
    templateUrl: './profile.component.html',
    styles: [`
    em {float:right; color: #e05c65; padding-left:10px;}
    .error input {background:#e3c3c5;}
    .error placeholder {color: #999;}
    `]
})
export class ProfileComponent implements OnInit {
    profileForm: FormGroup;
    firstName: FormControl;
    lastName: FormControl;

    constructor(private router: Router, private authService: AuthService) { }
    ngOnInit() {
        this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
        this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        })
    }

    saveProfile(formValues) {
        if (this.profileForm.valid) {
            this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
            this.router.navigate(['events']);

        }

    }
    cancel() {
        this.router.navigate(['events']);
    }
    validateFirstName() {
        return this.firstName.valid || this.firstName.untouched;
    }
    validateLastName() {
        return this.lastName.valid || this.lastName.untouched;
    }
}