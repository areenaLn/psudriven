import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
export interface LecObj {
    lecObjId: string;
    lecObjQues: string;
}
export interface Pedagory {
    pedagoryId: string;
    pedagoryName: string;
}
export interface LecProcess {
    lecProcassId: string;
    lecProcassQ: string;
}

export interface LecAss {
    lecAssessId: string;
    lecAssessQ: string;
}

export interface LecTool {
    lecToolId: string;
    lecToolName: string;
}
export interface LecResource {
    lecResourceID: string;
    lecResourceName: string;
}
export interface LecTech {
    lecTechId: string;
    lecTechQ: string;
}

export interface LecTechQ {
    techAcContQ: string;
    techAcTitleId: string;
}
@Injectable({
  providedIn: 'root'
})
export class LecPart2Service {
url:string;
lecForm1:any;
lecForm:any;
lecTool:any;
  constructor(private httpClient: HttpClient) {
    this.url = environment.URL_API;
   }
  getLecobj() {
    return this.httpClient.get(`${this.url}/getLecobj.php`);
}
getLecpedagory() {
    return this.httpClient.get(`${this.url}/getLecpedagory.php`);
}
getLecprocass() {
    return this.httpClient.get(`${this.url}/getLecprocass.php`);
}
getLectool() {
    return this.httpClient.get(`${this.url}/getLectool.php`);
}
getLecassess() {
    return this.httpClient.get(`${this.url}/getLecassess.php`);
}
getLecresource() {
    return this.httpClient.get(`${this.url}/getLecresource.php`);
}
getLectech() {
    return this.httpClient.get(`${this.url}/getLectech.php`);
}
getLectechq() {
    return this.httpClient.get(`${this.url}/getLectechq.php`);
}
addlecForm1(item: any) {
    this.lecForm1 = '';
    this.lecForm1 = item;
    return this.lecForm1
}
getlecForm1() {
    return this.lecForm1;
}
addlectool(item: any) {
    this.lecTool = '';
    this.lecTool = item;
    return this.lecTool
}
getlectool() {
    return this.lecTool;
}
addlecform(item: any) {
    this.lecForm = '';
    this.lecForm = item;
    return this.lecForm
}
getlecform() {
    return this.lecForm;
}
}
