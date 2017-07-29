import { Injectable } from '@angular/core'


import { IUser } from './user.model'

@Injectable()
export class AuthService {
    currentUser: IUser;

    loginUser(userName: string, password: string) {
        console.log('authService::', userName, password);
        this.currentUser = {
            id: 1,
            userName: userName,
            lastName: 'nguyen',
            firstName: 'frank'
        };
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.lastName = lastName;
        this.currentUser.firstName = firstName;
    }
}




