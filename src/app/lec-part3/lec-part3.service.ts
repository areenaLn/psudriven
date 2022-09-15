import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })
  export class LecPart3Service {
    url:string;
    constructor(private httpClient: HttpClient) {
        this.url = environment.URL_API;
       }
       addlecfrom(item: any, lecFroma1ns: any) {
        const httpOptions = {
          headers: new HttpHeaders({
    
            "Content-Type": "application/x-www-form-urlencoded",
    
          }),
        };
        let body = new URLSearchParams();
    
        body.set('age', item.age);
        body.set('sex', item.sex);
        body.set('religion', item.religion);
        body.set('nation', item.nation);
        body.set('lecpos', item.lecpos);
        body.set('lecExp', item.lecExp);
        body.set('lecExpert',  item.expert1 + ',' + item.expert2 + ',' + item.expert3);
        body.set('campus', item.campus);
        body.set('lecEdu', item.lecEdu);
        body.set('majorname', item.t2ans4);
        body.set('lecPendatory', lecFroma1ns.selecPedagory);
        body.set('lecObj', lecFroma1ns.selected);
        body.set('lecResource', lecFroma1ns.selectResource);
        body.set('lecTool', lecFroma1ns.selecTool);
        body.set('lecProcess', lecFroma1ns.selecProcess);
        body.set('lecAsses', lecFroma1ns.selectAsses);
        body.set('isAdd', 'true');
        body.set('major_id', item.majorname);
        return this.httpClient.post(
          `${this.url}/AddansLecperson.php`,
          body, httpOptions
    
        );
      }

      addlecTool(item: any, major: any) {
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
        body.set('major_id', major);
        return this.httpClient.post(
          `${this.url}/addlectoolAns.php`,
          body, httpOptions
    
        );
      }

      addlecTech(item: any, major: any) {
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
     
        body.set('t2ans', item.t2ans);
        body.set('t2ans1', item.t2ans1);
        body.set('t2ans2', item.t2ans2);
        body.set('t2ans3', item.t2ans3);
     
        body.set('t3ans', item.t3ans);
        body.set('t3ans1', item.t3ans1);
        body.set('t3ans2', item.t3ans2);
        body.set('t3ans3', item.t3ans3);
 
        body.set('t4ans', item.t4ans);
        body.set('t4ans1', item.t4ans1);
        body.set('t4ans2', item.t4ans2);
       
        body.set('isAdd', 'true');
        body.set('major_id', major);
        return this.httpClient.post(
          `${this.url}/addlecTechans.php`,
          body, httpOptions
    
        );
      }
  }