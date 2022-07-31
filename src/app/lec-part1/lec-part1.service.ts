import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
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
url:string;
    constructor(private httpClient: HttpClient) {
        this.url = environment.URL_API;
     }
    getLecpos() {
        return this.httpClient.get(`${this.url}/getLecpos.php`);
    }
    getLecExp() {
        return this.httpClient.get(`${this.url}/getLecexp.php`);
    }
    getLecEdu() {
        return this.httpClient.get(`${this.url}/getlecedu.php`);
    }
}
