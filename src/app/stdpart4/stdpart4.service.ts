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
  url: string;
  constructor(private httpClient: HttpClient) {
    this.url = environment.URL_API;
  }
  getstdPersontest() {
    return this.httpClient.get(`${this.url}/getstd_persontest.php`);
  }
  addANSpart1(item: any, itemCheck: any) {
    const httpOptions = {
      headers: new HttpHeaders({

        "Content-Type": "application/x-www-form-urlencoded",

      }),
    };
    let body = new URLSearchParams();
    body.set('age', item.age);
    body.set('objId', itemCheck.selectedObj);
    body.set('campus_id', item.campus1);
    body.set('learnStyleID', itemCheck.selectedLearn);
    body.set('resonstd_id', item.reson);
    body.set('mediaId', itemCheck.selectedMedia);
    body.set('stdGPAId', item.gpaStd);
    body.set('stdMajor_id', item.majorname);
    body.set('sex', item.sex);
    body.set('religion_id', item.religion);
    body.set('title', item.title);
    body.set('stdLevel_id', item.stdLevel);
    body.set('nationality', item.nation);
    body.set('isAdd', 'true');
    body.set('stdExpert', item.expert1 + ',' + item.expert2 + ',' + item.expert3);

    return this.httpClient.post(
      `${this.url}/Addansstdperson.php`,
      body, httpOptions

    );
  }
  addstdTechniq(item: any) {
    const httpOptions = {
      headers: new HttpHeaders({

        "Content-Type": "application/x-www-form-urlencoded",

      }),
    };
    let body = new URLSearchParams();

    body.set('idAns11', item.stdtechnic11);
    body.set('idAns10', item.stdtechnic10);
    body.set('idAns9', item.stdtechnic9);
    body.set('idAns8', item.stdtechnic8);
    body.set('idAns7', item.stdtechnic7);
    body.set('idAns6', item.stdtechnic6);
    body.set('idAns5', item.stdtechnic5);
    body.set('idAns4', item.stdtechnic4);
    body.set('idAns3', item.stdtechnic3);
    body.set('idAns2', item.stdtechnic2);
    body.set('idAns1', item.stdtechnic1);
    body.set('isAdd', 'true');
    body.set('idAns', item.stdtechnic);

    return this.httpClient.post(
      `${this.url}/stdAnstechniq.php`,
      body, httpOptions

    );
  }
  addstdBigFive(item: any) {
    const httpOptions = {
      headers: new HttpHeaders({

        "Content-Type": "application/x-www-form-urlencoded",

      }),
    };
    let body = new URLSearchParams();

    body.set('persomnAns', item.bigFive);
    body.set('persomnAns1', item.bigFive1);
    body.set('persomnAns2', item.bigFive2);
    body.set('persomnAns3', item.bigFive3);
    body.set('persomnAns4', item.bigFive4);
    body.set('persomnAns5', item.bigFive5);
    body.set('persomnAns6', item.bigFive6);
    body.set('persomnAns7', item.bigFive7);
    body.set('persomnAns8', item.bigFive8);
    body.set('persomnAns9', item.bigFive9);
    body.set('isAdd', 'true');
    body.set('major_id',item.major);
    return this.httpClient.post(
      `${this.url}/q.php`,
      body, httpOptions

    );
  }
  addstdTool(item: any ,major:any) {
    const httpOptions = {
      headers: new HttpHeaders({

        "Content-Type": "application/x-www-form-urlencoded",

      }),
    };
    let body = new URLSearchParams();

    body.set('t1ans', item.t1ans);
    body.set('t1ans1', item.t1ans1);
    body.set('t1ans2', item.t1ans2);
    body.set('t1ans3', item.t1ans3);
    body.set('t1ans4', item.t1ans4);
    body.set('t2ans', item.t2ans);
    body.set('t2ans1', item.t2ans1);
    body.set('t2ans2', item.t2ans2);
    body.set('t2ans3', item.t2ans3);
    body.set('t2ans4', item.t2ans4);
    body.set('t3ans', item.t3ans);
    body.set('t3ans1', item.t3ans1);
    body.set('t3ans2', item.t3ans2);
    body.set('t3ans3', item.t3ans3);
    body.set('t3ans4', item.t3ans4);
    body.set('t3ans5', item.t3ans5);
    body.set('t4ans', item.t4ans);
    body.set('t4ans1', item.t4ans1);
    body.set('t4ans2', item.t4ans2);
    body.set('t4ans3', item.t4ans3);
    body.set('t5ans', item.t5ans);
    body.set('t5ans1', item.t5ans1);
    body.set('t5ans2', item.t5ans2);
    body.set('t5ans3', item.t5ans3);
    body.set('t5ans4', item.t5ans4);
    body.set('t5ans5', item.t5ans4);
    body.set('t5ans6', item.t5ans6);
    body.set('t5ans7', item.t5ans7);
    body.set('t6ans', item.t6ans);
    body.set('t6ans1', item.t6ans1);
    body.set('t6ans2', item.t6ans2);
    body.set('t6ans3', item.t6ans3);
    body.set('t6ans4', item.t6ans4);
    body.set('t6ans5', item.t6ans5);
    body.set('t6ans6', item.t6ans6);
    body.set('isAdd', 'true');
    body.set('major_id',major);
    return this.httpClient.post(
      `${this.url}/addStdtoolAns.php`,
      body, httpOptions

    );
  }
}
