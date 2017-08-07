import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Subject, Observable } from 'rxjs/rx';


import { IUser } from './user.model'

@Injectable()
export class AuthService {
    currentUser: IUser;
    constructor(private http: Http) { }

    loginUser(userName: string, password: string) {
        console.log('authService::', userName, password);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let loginInfo = { username: userName, password: password };
        console.log('loginUser');
        return this.http.post('https://young-ravine-79636.herokuapp.com/api/login', JSON.stringify(loginInfo), options)
            .do(response => {

                if (response) {
                    this.currentUser = <any>{ id: 1 };
                    this.currentUser.userName = response.json()[0].username;
                    this.currentUser.firstName = response.json()[0].firstName || response.json()[0].username;
                    this.currentUser.lastName = response.json()[0].lastName || response.json()[0].username;
                    console.info('from server', response);
                }
            }).catch(error => {
                console.warn('from server error :', error);

                return Observable.of(false);
            });
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.lastName = lastName;
        this.currentUser.firstName = firstName;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(`https://young-ravine-79636.herokuapp.com/api/users/${this.currentUser.userName}`, JSON.stringify(this.currentUser), options);
    }

    checkAuthStatus() {
        return this.http.get('https://young-ravine-79636.herokuapp.com/api/currentIdentity').map((response: any) => {
            if (response._body) {
                return response.json();
            } else {
                return {}
            }
        }).do(currentUser => {
            if (!!currentUser.userName)
                this.currentUser = currentUser;
        }).subscribe();
    }

    logout() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(`https://young-ravine-79636.herokuapp.com/api/logout`, { username: this.currentUser.userName }, options);
    }

}




