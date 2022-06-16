import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  constructor(private httpClient: HttpClient) { }
  getLecobj() {
    return this.httpClient.get(`http://192.168.1.14/UngPhp4/getLecobj.php`);
}
getLecpedagory() {
    return this.httpClient.get(`http://192.168.1.14/UngPhp4/getLecpedagory.php`);
}
getLecprocass() {
    return this.httpClient.get(`http://192.168.1.14/UngPhp4/getLecprocass.php`);
}
getLectool() {
    return this.httpClient.get(`http://192.168.1.14/UngPhp4/getLectool.php`);
}
getLecassess() {
    return this.httpClient.get(`http://192.168.1.14/UngPhp4/getLecassess.php`);
}
getLecresource() {
    return this.httpClient.get(`http://192.168.1.14/UngPhp4/getLecresource.php`);
}
getLectech() {
    return this.httpClient.get(`http://192.168.1.14/UngPhp4/getLectech.php`);
}
getLectechq() {
    return this.httpClient.get(`http://192.168.1.14/UngPhp4/getLectechq.php`);
}
}
