import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EduFormService {
  url: string;
  constructor(private httpClient: HttpClient) {
    this.url = environment.URL_API;
  }
  addPost(item: any) {
    const httpOptions = {
      headers: new HttpHeaders({

        "Content-Type": "application/x-www-form-urlencoded",

      }),
    };
    return this.httpClient.post(
      `${this.url}/insertData.php`,
      item, httpOptions

    );
  }
}
