import { HttpClient } from '@angular/common/http';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
export interface AnsStd {
  idFormLec: string;
  campus_id: string;
  age: string;
  religion_id: string;
  sex: string;
  nationality: string;
  stdLevel_id: string;
  stdMajor_id: string;
  stdGPAId: string;
  objId: string;
  mediaId: string;
  resonstd_id: string;
  reli_name: string;
  major_name: string;
  stdGPA_name: string;
  stdLevel_name: string;
  canpus_name: string;
  
}
export interface AnsstdSkill {
  id: string;
  idAnsForm: string;
  skillQuesId: string;
  ansskill: string;
  major_id: string;
}
export interface BigFive {
  id: string;
  idAnsForm: string;
  personQId: string;
  persomnAns: string;
  major_id: string;
}

@Injectable({
  providedIn: 'root'
})
export class DashboardStdService {
url:String;
dataSkill:any[]=[];
dataBigfive:any[]=[];
stdSkill:AnsstdSkill[]=[];
bigfive:BigFive[]=[];
dataSkillChange: BehaviorSubject<any>;dataBigFiveChange: BehaviorSubject<any>;
std:AnsStd[]=[];stdAnsChange: BehaviorSubject<any>;stdAnsSkillChange: BehaviorSubject<any>;
stdBigfiveChange: BehaviorSubject<any>;
  constructor(private httpClient: HttpClient) {
    this.stdAnsChange= new BehaviorSubject(null);
    this.stdAnsSkillChange= new BehaviorSubject(null);
    this.stdBigfiveChange= new BehaviorSubject(null);
    this.dataSkillChange= new BehaviorSubject(null);
    this.dataBigFiveChange= new BehaviorSubject(null);
    this.url =environment.URL_API;

   }
getansStd() {
    return this.httpClient.get(`${this.url}/getansStd.php`);
}
getansStdSkill() {
  return this.httpClient.get(`${this.url}/getstdskillans.php`);
}
getansStdSkillWmajor(major:any) {
  return this.httpClient.get(`${this.url}/getWhereskill.php?isAdd=true&major_id=${major}`);
}
getansStdBigfiveWmajor(major:any) {
  return this.httpClient.get(`${this.url}/getstdPtestWmajor.php?isAdd=true&major_id=${major}`);
}
getansBigfive() {
  return this.httpClient.get(`${this.url}/getstd_persontestans.php`);
}
getStdskilltype() {
  return this.httpClient.get(`${this.url}/getStdskilltype.php`);
}
getCampus() {
  return this.httpClient.get(`${this.url}/getCampus.php`);
}
getstdPersontest() {
  return this.httpClient.get(`${this.url}/getstd_persontest.php`);
}
addAsnStd(std:AnsStd[]){
  this.std = std;
  return this.std
}
getAsnStd2(){
return this.std;
}
addskillData(bigFive:any[]){
  this.dataSkill = bigFive;
  return this.dataSkill
}
getSkillData(){
return this.dataSkill;
}
addBigFiveData(std:any[]){
  this.dataBigfive = std;
  return this.dataBigfive
}
getBigfiveData(){
return this.dataBigfive;
}
addAsnStdSkill(std:AnsstdSkill[]){
  this.stdSkill=[];
  this.stdSkill = std;
  return this.stdSkill
}
getAsnStdSkill(){
return this.stdSkill;
}
addbigFive(std:BigFive[]){
  this.bigfive=[];
  this.bigfive = std;
  return this.stdSkill
}
getBigfiveSave(){
return this.bigfive;
}

}
