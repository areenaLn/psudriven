import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
export interface Learning {
  id: number;
  typeId: number;
  topic: string;
  title: string;
  content: string;
  image: string;
}
@Injectable({
  providedIn: 'root'
})

export class LearningStyleService {
  detail: any;
  url: string;
  constructor(private httpClient: HttpClient) { this.url = environment.URL_API; }
  getAlldatapos() {
    return this.httpClient.get(`${this.url}/getAlldatapos.php`);
  }
  addDetail(detail: any) {
    this.detail = detail;
    return this.detail;
  }
  getDetail() {
    return this.detail;
  }
  deletePost(id:any){
    return this.httpClient.get(`${this.url}/deleteDataPost.php?id=${id}`);
  }
  
}

