import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface StdSkill {
    skillTypeId: string;
    skillTypeName: string;
}
export interface SkillQ {
  // skillId:number;
    skillQues: string;
    skillTypeId: string;
}
@Injectable({
  providedIn: 'root'
})
export class Stdpart3Service {
url:string;
stdSkill:any;
  constructor(private httpClient: HttpClient) {
    this.url =environment.URL_API;
  }
  getStdskilltype() {
    return this.httpClient.get(`${this.url}/getStdskilltype.php`);
}
getStdskillques() {
    return this.httpClient.get(`${this.url}/getStdskillques.php`);
}
addstdSkill(item: any) {
  this.stdSkill = '';
  this.stdSkill = item;
  return this.stdSkill
}
getstdSkill() {
  return this.stdSkill;
}
}
