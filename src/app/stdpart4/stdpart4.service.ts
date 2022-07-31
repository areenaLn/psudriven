import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface PersonTest {
    personQId: string;
    pQuestion: string;
}
@Injectable({
  providedIn: 'root'
})
export class Stdpart4Service {
url:string;
  constructor(private httpClient: HttpClient) {
    this.url =environment.URL_API;
   }
  getstdPersontest() {
    return this.httpClient.get(`${this.url}/getstd_persontest.php`);
}

}
