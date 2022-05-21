import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AppConstants } from '../app.constants';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
@Injectable({
    providedIn: 'root'

})
export class TokenService {

    constructor(private http: HttpClient) { }
    //   public saveToken(token: string): void {
    //     window.sessionStorage.removeItem(TOKEN_KEY);
    //     window.sessionStorage.setItem(TOKEN_KEY, token);
    //   }

    //   public getToken(): string {
    //     return sessionStorage.getItem(TOKEN_KEY)!;
    //   }

    //   public saveUser(user:any): void {
    //     window.sessionStorage.removeItem(USER_KEY);
    //     window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    //   }

    public getUser(): any {
        return JSON.parse(sessionStorage.getItem(USER_KEY)!);
    }
    getCurrentUser(): Observable<any> {
        return this.http.get(AppConstants.API_URL + 'user/me', httpOptions);
    }
}
