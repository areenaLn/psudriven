import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export interface StdSkill {
    skillTypeId: string;
    skillTypeName: string;
}
export interface SkillQ {
    skillQues: string;
    skillTypeId: string;
}
@Injectable({
  providedIn: 'root'
})
export class Stdpart3Service {

  constructor(private httpClient: HttpClient) {}
  getStdskilltype() {
    return this.httpClient.get(`http://192.168.1.44/UngPhp4/getStdskilltype.php`);
}
getStdskillques() {
    return this.httpClient.get(`http://192.168.1.44/UngPhp4/getStdskillques.php`);
}
}
