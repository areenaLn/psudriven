import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface Major {
    campus_id: string;
    canpus_name: string;
}
export interface Religion {
    reli_id: string;
    reli_name: string;
}export interface StdLevel {
    stdLevel_id: string;
    stdLevel_name: string;
}  export interface Major {
    major_id: string;
    major_name: string;
}
export interface StdGpa {
    stdGPAId: string;
    stdGPA_name: string;
}
export interface stdReson {
    resonstd_id: string;
    resonstd_name: string;
}




@Injectable({
    providedIn: 'root'
})

export class Stdpart1Service {
url:string;
    constructor(private httpClient: HttpClient) { 
        this.url =environment.URL_API;
    }
    getRedeemRe() {
        return this.httpClient.get(`${this.url}/getCampus.php`);
    }
    getRelogion() {
        return this.httpClient.get(`${this.url}/religion.php`);
    }
    getStdLevel() {
        return this.httpClient.get(`${this.url}/getStdlevel.php`);
    }
    getmajor() {
        return this.httpClient.get(`${this.url}/major.php`);
    }
    getStdGpa() {
        return this.httpClient.get(`${this.url}/getStdGpa.php`);
    } 
     getStdResoucse() {
        return this.httpClient.get(`${this.url}/getStdResoucse.php`);
    }
}
