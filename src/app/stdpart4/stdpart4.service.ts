import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface PersonTest {
    personQId: string;
    pQuestion: string;
}
@Injectable({
  providedIn: 'root'
})
export class Stdpart4Service {

  constructor(private httpClient: HttpClient) { }
  getstdPersontest() {
    return this.httpClient.get(`http://192.168.1.44/UngPhp4/getstd_persontest.php`);
}

}
