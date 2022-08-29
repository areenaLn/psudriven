import { Stdpart3Service, StdSkill, SkillQ } from './stdpart3.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-stdpart3',
    templateUrl: './stdpart3.component.html',
    styleUrls: ['./stdpart3.component.scss']
})
export class Stdpart3Component implements OnInit {
    selectedSkill: any[]=[];
    selectedSkill1: any[]=[];selectedSkill2: any[]=[];selectedSkill3: any[]=[];selectedSkill4: any[]=[];selectedSkill5: any[]=[];
    s1ans: any; s1ans1: any; s1ans2: any; s1ans3: any; s1ans4: any;
    s2ans: any;s2ans1: any;s2ans3: any;s2ans2: any;
    s3ans: any;s3ans1: any;s3ans3: any;s3ans2: any;
    s4ans: any;s4ans1: any;s4ans2: any;
    s5ans: any;s5ans1: any;s5ans3: any;s5ans2: any;
    s6ans: any;s6ans1: any;s6ans3: any;s6ans2: any;
    constructor(private stdPasrt3Service: Stdpart3Service,
        private fb: FormBuilder,) {
        this.stdSkillans = this.fb.group({
            s1ans: [""],
            s1ans1: [""],
            s1ans2: [""],
            s1ans3: [""],
            s1ans4: [""],
            s2ans: [""],
            s2ans1: [""],
            s2ans2: [""],
            s2ans3: [""],
            s3ans: [""],
            s3ans1: [""],
            s3ans2: [""],
            s3ans3: [""],
            s4ans: [""],
            s4ans1: [""],
            s4ans2: [""],
            s5ans: [""],
            s5ans1: [""],
            s5ans2: [""],
            s5ans3: [""],
            s6ans: [""],
            s6ans1: [""],
            s6ans2: [""],
            s6ans3: [""],
            
          });
     }
    radioValue: any = [{
        id: 5,
        value: "5"
      }, {
        id: 4,
        name: "4"
      }, {
        id: 3,
        name: "3"
      }, {
        id: 2,
        name: "2"
      }, {
        id: 1,
        name: "1"
      }];
      stdSkillans: FormGroup;
    stdSkillType: StdSkill[] = [];
    stdSkillQ: SkillQ[] = []; stdSkillQ1: SkillQ[] = []; stdSkillQ2: SkillQ[] = []; stdSkillQ3: SkillQ[] = []; stdSkillQ4: SkillQ[] = []; stdSkillQ5: SkillQ[] = []; stdSkillQ6: SkillQ[] = [];
    ngOnInit(): void {
        this.getStdskilltype();
        this.getStdskillques();
    }
    getStdskilltype() {
        this.stdPasrt3Service.getStdskilltype().subscribe((reponse: any) => {
            if (reponse) {
                this.stdSkillType = reponse;

            } else {
            }
        });
    }
    getStdskillques() {
        this.stdPasrt3Service.getStdskillques().subscribe((reponse: any) => {
            if (reponse) {
                this.stdSkillQ = reponse;
                this.stdSkillQ1 = this.stdSkillQ.filter(
                    user => user.skillTypeId === "1");
                this.stdSkillQ2 = this.stdSkillQ.filter(
                    user => user.skillTypeId === "2");
                this.stdSkillQ3 = this.stdSkillQ.filter(
                    user => user.skillTypeId === "3"); this.stdSkillQ4 = this.stdSkillQ.filter(
                        user => user.skillTypeId === "4"); this.stdSkillQ5 = this.stdSkillQ.filter(
                            user => user.skillTypeId === "5"); this.stdSkillQ6 = this.stdSkillQ.filter(
                                user => user.skillTypeId === "6");
            } else {
            }
        });
    }
    checkedTool(item: any) {
        if (this.selectedSkill.indexOf(item) != -1) {
          return;
        }
      }
      onChangeTool(checked: any, item: any, qid: any) {
        if (checked.checked) {
          this.selectedSkill = [];
          this.selectedSkill.push(item.id);
          // console.log('selected :' + this.selectedtool, qid + 1, typeId + 1)
          if (qid == 0) {
            this.s1ans = [];
            this.s1ans.push(1);
            this.s1ans.push(qid + 1);
            this.s1ans.push(this.selectedSkill);
          } else if (qid == 1) {
            this.s1ans1 = [];
            this.s1ans1.push(1);
            this.s1ans1.push(qid + 1);
            this.s1ans1.push(this.selectedSkill);
          } else if (qid == 2) {
            this.s1ans2 = [];
            this.s1ans2.push(1);
            this.s1ans2.push(qid + 1);
            this.s1ans2.push(this.selectedSkill);
          } else if (qid == 3) {
            this.s1ans3 = [];
            this.s1ans3.push(1);
            this.s1ans3.push(qid + 1);
            this.s1ans3.push(this.selectedSkill);
          } else if (qid == 4) {
            this.s1ans4 = [];
            this.s1ans4.push(1);
            this.s1ans4.push(qid + 1);
            this.s1ans4.push(this.selectedSkill);
          }
    
    
        } else {
          this.selectedSkill.splice(this.selectedSkill.indexOf(item), 1)
    
        }
      }

      checkedSkill(item: any) {
        if (this.selectedSkill1.indexOf(item) != -1) {
          return;
        }
      }
      onChangeSkill(checked: any, item: any, qid: any) {
        if (checked.checked) {
          this.selectedSkill1 = [];
          this.selectedSkill1.push(item.id);
          // console.log('selected :' + this.selectedtool, qid + 1, typeId + 1)
          if (qid == 0) {
            this.s2ans = [];
            this.s2ans.push(2);
            this.s2ans.push(qid + 1);
            this.s2ans.push(this.selectedSkill1);
          } else if (qid == 1) {
            this.s2ans1 = [];
            this.s2ans1.push(2);
            this.s2ans1.push(qid + 1);
            this.s2ans1.push(this.selectedSkill1);
          } else if (qid == 2) {
            this.s2ans2 = [];
            this.s2ans2.push(2);
            this.s2ans2.push(qid + 1);
            this.s2ans2.push(this.selectedSkill1);
          } else if (qid == 3) {
            this.s2ans3 = [];
            this.s2ans3.push(2);
            this.s2ans3.push(qid + 1);
            this.s2ans3.push(this.selectedSkill1);
          } 
    
    
        } else {
          this.selectedSkill1.splice(this.selectedSkill1.indexOf(item), 1)
    
        }
      }

      checkedSkill1(item: any) {
        if (this.selectedSkill2.indexOf(item) != -1) {
          return;
        }
      }
      onChangeSkill1(checked: any, item: any, qid: any) {
        if (checked.checked) {
          this.selectedSkill2 = [];
          this.selectedSkill2.push(item.id);
          // console.log('selected :' + this.selectedtool, qid + 1, typeId + 1)
          if (qid == 0) {
            this.s3ans = [];
            this.s3ans.push(3);
            this.s3ans.push(qid + 1);
            this.s3ans.push(this.selectedSkill2);
          } else if (qid == 1) {
            this.s3ans1 = [];
            this.s3ans1.push(3);
            this.s3ans1.push(qid + 1);
            this.s3ans1.push(this.selectedSkill2);
          } else if (qid == 2) {
            this.s3ans2 = [];
            this.s3ans2.push(3);
            this.s3ans2.push(qid + 1);
            this.s3ans2.push(this.selectedSkill2);
          } else if (qid == 3) {
            this.s3ans3 = [];
            this.s3ans3.push(3);
            this.s3ans3.push(qid + 1);
            this.s3ans3.push(this.selectedSkill2);
          } 
    
    
        } else {
          this.selectedSkill2.splice(this.selectedSkill2.indexOf(item), 1)
    
        }
      }

      checkedSkill3(item: any) {
        if (this.selectedSkill3.indexOf(item) != -1) {
          return;
        }
      }
      onChangeSkill3(checked: any, item: any, qid: any) {
        if (checked.checked) {
          this.selectedSkill3 = [];
          this.selectedSkill3.push(item.id);
          // console.log('selected :' + this.selectedtool, qid + 1, typeId + 1)
          if (qid == 0) {
            this.s4ans = [];
            this.s4ans.push(4);
            this.s4ans.push(qid + 1);
            this.s4ans.push(this.selectedSkill3);
          } else if (qid == 1) {
            this.s4ans1 = [];
            this.s4ans1.push(4);
            this.s4ans1.push(qid + 1);
            this.s4ans1.push(this.selectedSkill3);
          } else if (qid == 2) {
            this.s4ans2 = [];
            this.s4ans2.push(4);
            this.s4ans2.push(qid + 1);
            this.s4ans2.push(this.selectedSkill3);
          } 
    
    
        } else {
          this.selectedSkill3.splice(this.selectedSkill3.indexOf(item), 1)
    
        }
      }

      checkedSkill4(item: any) {
        if (this.selectedSkill4.indexOf(item) != -1) {
          return;
        }
      }
      onChangeSkill4(checked: any, item: any, qid: any) {
        if (checked.checked) {
          this.selectedSkill4 = [];
          this.selectedSkill4.push(item.id);
          // console.log('selected :' + this.selectedtool, qid + 1, typeId + 1)
          if (qid == 0) {
            this.s5ans = [];
            this.s5ans.push(5);
            this.s5ans.push(qid + 1);
            this.s5ans.push(this.selectedSkill4);
          } else if (qid == 1) {
            this.s5ans1 = [];
            this.s5ans1.push(5);
            this.s5ans1.push(qid + 1);
            this.s5ans1.push(this.selectedSkill4);
          } else if (qid == 2) {
            this.s5ans2 = [];
            this.s5ans2.push(5);
            this.s5ans2.push(qid + 1);
            this.s5ans2.push(this.selectedSkill4);
          } else if (qid == 3) {
            this.s5ans3 = [];
            this.s5ans3.push(5);
            this.s5ans3.push(qid + 1);
            this.s5ans3.push(this.selectedSkill4);
          } 
    
    
        } else {
          this.selectedSkill4.splice(this.selectedSkill4.indexOf(item), 1)
    
        }
      }
      checkedSkill5(item: any) {
        if (this.selectedSkill4.indexOf(item) != -1) {
          return;
        }
      }
      onChangeSkill5(checked: any, item: any, qid: any) {
        if (checked.checked) {
          this.selectedSkill5 = [];
          this.selectedSkill5.push(item.id);
          // console.log('selected :' + this.selectedtool, qid + 1, typeId + 1)
          if (qid == 0) {
            this.s6ans = [];
            this.s6ans.push(6);
            this.s6ans.push(qid + 1);
            this.s6ans.push(this.selectedSkill5);
          } else if (qid == 1) {
            this.s6ans1 = [];
            this.s6ans1.push(6);
            this.s6ans1.push(qid + 1);
            this.s6ans1.push(this.selectedSkill5);
          } else if (qid == 2) {
            this.s6ans2 = [];
            this.s6ans2.push(6);
            this.s6ans2.push(qid + 1);
            this.s6ans2.push(this.selectedSkill5);
          } else if (qid == 3) {
            this.s6ans3 = [];
            this.s6ans3.push(6);
            this.s6ans3.push(qid + 1);
            this.s6ans3.push(this.selectedSkill5);
          } 
    
    
        } else {
          this.selectedSkill5.splice(this.selectedSkill5.indexOf(item), 1)
    
        }
      }
      onSubmit() {
        this.stdSkillans.patchValue({
            s1ans: this.s1ans,
            s1ans1: this.s1ans1,
            s1ans2: this.s1ans2,
            s1ans3: this.s1ans3,
            s1ans4: this.s1ans4,
            s2ans:this.s2ans,
            s2ans1:this.s2ans1,
            s2ans2: this.s2ans2,
            s2ans3: this.s2ans3,
            s3ans: this.s3ans,
            s3ans1: this.s3ans1,
            s3ans2: this.s3ans2,
            s3ans3:this.s3ans3,
            s4ans: this.s4ans,
            s4ans1: this.s4ans1,
            s4ans2: this.s4ans2,
            s5ans: this.s5ans,
            s5ans1: this.s5ans1,
            s5ans2:this.s5ans2,
            s5ans3: this.s5ans3,
            s6ans: this.s6ans,
            s6ans1: this.s6ans1,
            s6ans2: this.s6ans2,
            s6ans3: this.s6ans3,
          });
          this.stdPasrt3Service.addstdSkill(this.stdSkillans.getRawValue())
        //   console.log("ddd"+ this.stdPasrt3Service.addstdSkill(this.stdSkillans.getRawValue()))
      }
}
