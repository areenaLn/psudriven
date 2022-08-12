import { HttpClient, HttpHeaders } from '@angular/common/http';
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
addPost(type:any,topic:any,title:any,content:any,image:any) {
  const httpOptions = {
      headers: new HttpHeaders({

          "Content-Type": "application/x-www-form-urlencoded",

      }),
  };
  let body = new URLSearchParams();
  body.set('typeId', type);
  body.set('topic', topic);
  body.set('content',content);
  body.set('title', title);
  body.set('image', image);
  body.set('isAdd', 'true');
  return this.httpClient.post(
      `${this.url}/insertData.php`,
      body, httpOptions

  );
}
}
