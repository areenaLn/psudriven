import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

    constructor(private httpClient: HttpClient) { }
    getstdobjective() {
        return this.httpClient.get(`http://192.168.1.44/UngPhp4/getstdobjective.php`);
    }
    getStdlearnstyle() {
        return this.httpClient.get(`http://192.168.1.44/UngPhp4/getStdlearnstyle.php`);
    }
    getStdmediastyle() {
        return this.httpClient.get(`http://192.168.1.44/UngPhp4/getStdmediastyle.php`);
    }
    getStdtechniqstd() {
        return this.httpClient.get(`http://192.168.1.44/UngPhp4/getStdtechniqstd.php`);
    }
    getToolType() {
        return this.httpClient.get(`http://192.168.1.44/UngPhp4/getTooltype.php`);
    }
    getToolques() {
        return this.httpClient.get(`http://192.168.1.44/UngPhp4/getToolques.php`);
    }

}
