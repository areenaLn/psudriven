import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export interface LecPos {
    lecPosId: string;
    lecPos_name: string;
}
export interface LecExp {
    lecExpId: string;
    lecExp_name: string;
}
export interface LecEdu {
    lecEduId: string;
    lecEdu_name: string;
}

@Injectable({
    providedIn: 'root'
})
export class LecPart1Service {

    constructor(private httpClient: HttpClient) { }
    getLecpos() {
        return this.httpClient.get(`http://192.168.1.14/UngPhp4/getLecpos.php`);
    }
    getLecExp() {
        return this.httpClient.get(`http://192.168.1.14/UngPhp4/getLecexp.php`);
    }
    getLecEdu() {
        return this.httpClient.get(`http://192.168.1.14/UngPhp4/getlecedu.php`);
    }
}
