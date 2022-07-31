import { Component, OnInit } from '@angular/core';
import { Major, Stdpart1Service } from '../stdpart1/stdpart1.service';
import { StdSkill } from '../stdpart3/stdpart3.service';
import { PersonTest } from '../stdpart4/stdpart4.service';
import { AnsStd, AnsstdSkill, BigFive, DashboardStdService } from './dashboard-std.service';

@Component({
  selector: 'app-dashboard-std',
  templateUrl: './dashboard-std.component.html',
  styleUrls: ['./dashboard-std.component.scss']
})
export class DashboardStdComponent implements OnInit {
  general = true;
  educate = false;
  theory = false;
  skill = false; major: Major[] = [];
  skillData:any[]=[];
  skillType:StdSkill[]=[];
  majorName ='ภาพรวมทุกสาขา'
  majorName1 ='ภาพรวมทุกสาขา'
  personTest:PersonTest[]=[];
  bigFive:BigFive[]=[];
  getAnsStd:AnsStd[]=[];  getAnsStdskill:AnsstdSkill[]=[];
  allMajor=0;
  dataBig:any[]=[];
    constructor(private stdpart1Service:Stdpart1Service,private dashboardStdService:DashboardStdService) { }

  ngOnInit(): void {this.getMajor();
    this.getAnsStds();
    this.getAnsStdSkill();
    this.getSkilltype();
    this.getStdtechniqstd();
    this.getBigfive();
    this.dashboardStdService.dataSkillChange.subscribe((response: any) => {
      if (response && response.loadStd) {
        this.skillData = this.dashboardStdService.getSkillData();
      }
    });
    this.dashboardStdService.dataBigFiveChange.subscribe((response: any) => {
      if (response && response.loadStd) {
        this.dataBig = this.dashboardStdService.getBigfiveData();
      }
    });
  }
  select_catagory(number: number) {
    if (number == 1) {
      this.general = true;
      this.educate = false;  this.theory = false;  this.skill = false;
    
    } else if (number == 2) {
      this.general = false;
      this.educate = true;  this.theory = false;  this.skill = false;
   
    }
    else if (number == 3) {
      this.general = false;
      this.educate = false;  this.theory = true;  this.skill = false;
   
    }
    else if (number == 4) {
      this.general = false;
      this.educate = false;  this.theory = false;  this.skill = true;
   
    }

  }
  getStdtechniqstd() {
    this.dashboardStdService.getstdPersontest().subscribe((reponse: any) => {
        if (reponse) {
            this.personTest = reponse;

        } else {
        }
    });
}
  getMajor() {

    this.stdpart1Service.getmajor().subscribe((reponse: any) => {
        if (reponse) {
            this.major = reponse;
            this.allMajor =  this.major.length;
            // console.log("Major:"+this.major[0].major_name)

        } else {
            this.major = [];
        }
    });
}
getBigfive(){
  this.dashboardStdService.getansBigfive().subscribe((reponse: any) => {
    if (reponse) {
        this.bigFive = reponse;
        console.log('data test:'+this.bigFive[0].major_id);
        this.addStdbigFive();
    } else {
        this.bigFive = [];
    }
});
}
getSkilltype(){
  this.dashboardStdService.getStdskilltype().subscribe((reponse: any) => {
    if (reponse) {
        this.skillType = reponse;
        console.log('data test:'+this.skillType[0].skillTypeName);
       
    } else {
        this.skillType = [];
    }
});
}
getAnsStds() {
  this.dashboardStdService.getansStd().subscribe((reponse: any) => {
      if (reponse) {
          this.getAnsStd = reponse;
          // console.log('data test:'+this.getAnsStd[0].major_name);
          this.addStd();
      } else {
          this.getAnsStd = [];
      }
  });
}
addStd(){
  this.dashboardStdService.addAsnStd(this.getAnsStd);
  if(this.dashboardStdService.addAsnStd(this.getAnsStd)){
    this.dashboardStdService.stdAnsChange.next({
      loadStd: true,
    }); 
  }
}
addBigfive(){
  this.dashboardStdService.addbigFive(this.bigFive);
  if(this.dashboardStdService.addbigFive(this.bigFive)){
    this.dashboardStdService.stdBigfiveChange.next({
      loadStd: true,
    }); 
  }
}

getAnsStdSkill() {

  this.dashboardStdService.getansStdSkill().subscribe((reponse: any) => {
      if (reponse) {
          this.getAnsStdskill = reponse;
         // console.log('data test:'+this.getAnsStd[0].major_name);
          this.addStdskill();
      } else {
          this.getAnsStdskill = [];
      }
  });
}
getAnsStdSkillmajor(id:any) {
  this.dashboardStdService.getansStdSkillWmajor(id).subscribe((reponse: any) => {
      if (reponse) {
        this.getAnsStdskill = [];
          this.getAnsStdskill = reponse;
          this.addStdskill();
      } else {
          this.getAnsStdskill = [];
      }
  });
}
getAnsStdBigfivemajor(id:any) {
  this.dashboardStdService.getansStdBigfiveWmajor(id).subscribe((reponse: any) => {
      if (reponse) {
        this.bigFive = [];
          this.bigFive = reponse;
          this.addStdbigFive();
      } else {
          this.bigFive = [];
      }
  });
}
addStdskill(){
  this.dashboardStdService.addAsnStdSkill(this.getAnsStdskill);
  if(this.dashboardStdService.addAsnStdSkill(this.getAnsStdskill)){
    this.dashboardStdService.stdAnsSkillChange.next({
      loadStd: true,
    }); 
  }
}
addStdbigFive(){
  this.dashboardStdService.addbigFive(this.bigFive);
  if(this.dashboardStdService.addbigFive(this.bigFive)){
    this.dashboardStdService.stdBigfiveChange.next({
      loadStd: true,
    }); 
  }
}
getmajorID(majorId:any,majorName:any){
  this.majorName = majorName;
  console.log("Id :"+majorId)
  this.getAnsStdSkillmajor(majorId);
}
getmajorID1(majorId:any,majorName:any){
  this.majorName1 = majorName;
  console.log("Id :"+majorId)
 this.getAnsStdBigfivemajor(majorId);
}

}
