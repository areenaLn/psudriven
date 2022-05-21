import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
export interface Webdata {
    token: string;
    username: string;

}

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    webData: Webdata = {
        token: "",
        username: '',

    };
    url: string;
    constructor(private httpClient: HttpClient) {
        this.url = environment.URL_API;
    }
    auth(auth1: any) {
        const httpOptions = {
            headers: new HttpHeaders({

                "Content-Type": "application/x-www-form-urlencoded",

            }),
        };
        let body = new URLSearchParams();
        body.set('username', auth1.username);
        body.set('password', auth1.password);
        return this.httpClient.post(
            `${this.url}/api/login`,
            body, httpOptions

        );
    }
    signUp(signup: any) {


        return this.httpClient.post(
            `${this.url}/api/signup`,
            {
                name: signup.names,
                username: signup.email,
                password: signup.password
            },

        );
    }

    getOTP(auth1: any, token: any) {
        const httpOptions = {
            headers: new HttpHeaders({

                "authorization": `Bearer ${token}`
            }),
        };
        return this.httpClient.get(
            `${this.url}/api/generateOtp?username=${auth1.username}`, httpOptions


        );
    }
    addWebData(list: Webdata) {
        this.webData = list
        return this.webData

    }
    getWebData() {
        return this.webData;
    }
}
