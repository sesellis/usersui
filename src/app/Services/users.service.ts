import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { UserViewModel } from '../Classes/userviewmodel';
import { User } from '../Classes/user';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class UserService {

    private serviceUrl = 'https://localhost:44336/api/Users/';  // URL to web api

    constructor(
        private http: HttpClient) { }

    /** GET heroes from the server */
    getUserViewModels(): Observable<UserViewModel[]> {
        return this.http.get<UserViewModel[]>(this.serviceUrl);
    }

    getUser(id: string): Observable<User> {        
        return this.http.get<User>(this.serviceUrl + id);
    }
}