import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url: string
  sidebarIndex = 0;
  constructor(private httpClient: HttpClient) {
    this.url = environment.URL_API;
  }
  editPostData(id: any, topic: any, content: any, title: any, image: any) {

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    };
    let body = new URLSearchParams();
    body.set('id', id);
    body.set('topic', topic);
    body.set('content', content);
    body.set('title', title);
    body.set('image', image);
    body.set('isAdd', 'true');
    return this.httpClient.post(
      `${this.url}/editPostData.php`, body, httpOptions,


    );
  }
  getLogin(username: string, password: string) {
    return this.httpClient.get(`${this.url}/login.php?username=${username}&password=${password}`);
  }
  addData(id: any) {
    this.sidebarIndex = 3;
    this.sidebarIndex = id;
    return this.sidebarIndex;
  }
  getData() {
    return this.sidebarIndex;
  }
}
//http://192.168.1.11/UngPhp4/login.php?username=admin@psu.ac.th&password=12345