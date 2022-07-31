import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
export interface StdObj {
    objId: string;
    objName: string;
}
export interface StdLearn {
    learnid: string;
    learnName: string;
}
export interface StdMedia {
    mediaId: string;
    mediaName: string;
}
export interface StdTech {
    techniqId: string;
    techniq_name: string;
}
export interface ToolType {
    toolTypeId: string;
    toolTypeName: string;
}
export interface ToolQ {
    toolQuesId: string;
    toolQues: string;
    toolTypeId: string;
}
@Injectable({
    providedIn: 'root'
})
export class Stdpart2Service {
url:string;
    constructor(private httpClient: HttpClient) { 
        this.url =environment.URL_API;
    }
    getstdobjective() {
        return this.httpClient.get(`${this.url}/getstdobjective.php`);
    }
    getStdlearnstyle() {
        return this.httpClient.get(`${this.url}/getStdlearnstyle.php`);
    }
    getStdmediastyle() {
        return this.httpClient.get(`${this.url}/getStdmediastyle.php`);
    }
    getStdtechniqstd() {
        return this.httpClient.get(`${this.url}/getStdtechniqstd.php`);
    }
    getToolType() {
        return this.httpClient.get(`${this.url}/getTooltype.php`);
    }
    getToolques() {
        return this.httpClient.get(`${this.url}/getToolques.php`);
    }

}
