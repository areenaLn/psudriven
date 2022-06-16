import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
export interface TypeEdu {
  typeId: string;
  type_name: string;
}

@Injectable({
  providedIn: 'root'
})
export class EduDataMenuService {
  url: string;  typeChang: BehaviorSubject<any>;
  typename:any;
  constructor(private httpClient: HttpClient) { this.url = environment.URL_API;   this.typeChang = new BehaviorSubject(null);}
  gettype() {
    return this.httpClient.get(`${this.url}/getTypeedu.php`);
}
addTypename(name:any){
this.typename = name;
return this.typename;
}
getTypename(){
return this.typename;
}
}
