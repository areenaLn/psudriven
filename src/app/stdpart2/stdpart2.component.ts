import { StdObj, Stdpart2Service, StdLearn, StdMedia, StdTech, ToolType, ToolQ } from './stdpart2.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stdpart2',
  templateUrl: './stdpart2.component.html',
  styleUrls: ['./stdpart2.component.scss']
})
export class Stdpart2Component implements OnInit {
  stdObj: StdObj[] = []; selectedObj: StdObj[] = []; selectedradio: any[] = [];
  stdLearn: StdLearn[] = []; selectedLearn: StdLearn[] = [];
  stdMedia: StdMedia[] = []; selectedMedia: StdMedia[] = [];
  chniqstd: StdTech[] = []; selectedtool: any[]=[]; selectedtool1: any[]=[]; selectedtool2: any[]=[]; selectedtool3: any[]=[]; selectedtool4: any[]=[];selectedtool5: any[]=[];
  toolType: ToolType[] = [];
  toolQ: ToolQ[] = []; toolQ1: ToolQ[] = []; toolQ2: ToolQ[] = [];
  toolQ3: ToolQ[] = []; toolQ4: ToolQ[] = []; toolQ5: ToolQ[] = []; toolQ6: ToolQ[] = [];
  technic1: any[] = [];
  technic2: any[] = [];
  technic3: any[] = [];
  technic4: any[] = [];
  technic5: any[] = [];
  technic6: any[] = [];
  technic7: any[] = [];
  technic8: any[] = [];
  technic9: any[] = [];
  technic10: any[] = [];
  technic11: any[] = [];
  technic12: any[] = [];

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
  stdForm1: FormGroup;
  stdtechnic: FormGroup;
  stdToolans: FormGroup;
  type1: any;
  constructor(private stdpart2Service: Stdpart2Service, private fb: FormBuilder,) {

    this.stdForm1 = this.fb.group({
      selectedLearn: [""],
      selectedMedia: [""],
      selectedObj: [""],
    });
    this.stdtechnic = this.fb.group({
      stdtechnic: [""],
      stdtechnic1: [""],
      stdtechnic2: [""],
      stdtechnic3: [""],
      stdtechnic4: [""],
      stdtechnic5: [""],
      stdtechnic6: [""],
      stdtechnic7: [""],
      stdtechnic8: [""],
      stdtechnic9: [""],
      stdtechnic10: [""],
      stdtechnic11: [""],
    });
    this.stdToolans = this.fb.group({
      t1ans: [""],
      t1ans1: [""],
      t1ans2: [""],
      t1ans3: [""],
      t1ans4: [""],
      t2ans: [""],
      t2ans1: [""],
      t2ans2: [""],
      t2ans3: [""],
      t2ans4: [""],
      t3ans: [""],
      t3ans1: [""],
      t3ans2: [""],
      t3ans3: [""],
      t3ans4: [""],
      t3ans5: [""],
      t4ans: [""],
      t4ans1: [""],
      t4ans2: [""],
      t4ans3: [""],
      t5ans: [""],
      t5ans1: [""],
      t5ans2: [""],
      t5ans3: [""],
      t5ans4: [""],
      t5ans5: [""],
      t5ans6: [""],
      t5ans7: [""],
      t6ans: [""],
      t6ans1: [""],
      t6ans2: [""],
      t6ans3: [""],
      t6ans4: [""],
      t6ans5: [""],
      t6ans6: [""],
    });
  }
  t1ans: any; t1ans1: any; t1ans2: any; t1ans3: any; t1ans4: any;
  t2ans: any; t2ans1: any; t2ans2: any; t2ans3: any; t2ans4: any;
  t3ans: any; t3ans1: any; t3ans2: any; t3ans3: any; t3ans4: any; t3ans5: any;
  t4ans: any; t4ans1: any; t4ans2: any; t4ans3: any;
  t5ans: any; t5ans1: any; t5ans2: any; t5ans3: any; t5ans4: any; t5ans5: any; t5ans6: any; t5ans7: any;
  t6ans: any; t6ans1: any; t6ans2: any; t6ans3: any; t6ans4: any; t6ans5: any; t6ans6: any;
  ngOnInit(): void {
    this.getStdObj(); this.getStdmediastyle();
    this.getStdLearn(); this.getStdtechniqstd();
    this.getToolType(); this.getToolques();
  }
  checkedradio(item: any) {
    if (this.selectedradio.indexOf(item) != -1) {
      return;
    }
  }
  onChangeradio(checked: any, item: any, qid: any) {
    if (checked.checked) {
      this.selectedradio = [];
      this.selectedradio.push(item.id);
      if (qid == 0) {
        this.technic1 = [];
        this.technic1.push(qid + 1);
        this.technic1.push(this.selectedradio);
        console.log('tec 1' + this.technic1)

      } else if (qid == 1) {
        this.technic2 = [];
        this.technic2.push(qid + 1);
        this.technic2.push(this.selectedradio);

      }
      else if (qid == 2) {
        this.technic3 = [];
        this.technic3.push(qid + 1);
        this.technic3.push(this.selectedradio);
      }
      else if (qid == 3) {
        this.technic4 = [];
        this.technic4.push(qid + 1);
        this.technic4.push(this.selectedradio);
      }
      else if (qid == 4) {
        this.technic5 = [];
        this.technic5.push(qid + 1);
        this.technic5.push(this.selectedradio);
      }
      else if (qid == 5) {
        this.technic6 = [];
        this.technic6.push(qid + 1);
        this.technic6.push(this.selectedradio);
      }
      else if (qid == 6) {
        this.technic7 = [];
        this.technic7.push(qid + 1);
        this.technic7.push(this.selectedradio);
      }
      else if (qid == 7) {
        this.technic8 = [];
        this.technic8.push(qid + 1);
        this.technic8.push(this.selectedradio);
      }
      else if (qid == 8) {
        this.technic9 = [];
        this.technic9.push(qid + 1);
        this.technic9.push(this.selectedradio);
      }
      else if (qid == 9) {
        this.technic10 = [];
        this.technic10.push(qid + 1);
        this.technic10.push(this.selectedradio);
      }
      else if (qid == 10) {
        this.technic11 = [];
        this.technic11.push(qid + 1);
        this.technic11.push(this.selectedradio);
      }
      else if (qid == 11) {
        this.technic12 = [];
        this.technic12.push(qid + 1);
        this.technic12.push(this.selectedradio);
      }
      // console.log('selected :' + this.selectedradio, qid + 1)
    } else {
      this.selectedradio.splice(this.selectedradio.indexOf(item), 1)
      // console.log('selected :' + this.selectedradio, qid + 1)
    }
  }
  checkedTool(item: any) {
    if (this.selectedtool.indexOf(item) != -1) {
      return;
    }
  }
  onChangeTool(checked: any, item: any, qid: any) {
    if (checked.checked) {
      this.selectedtool = [];
      this.selectedtool.push(item.id);
      // console.log('selected :' + this.selectedtool, qid + 1, typeId + 1)
      if (qid == 0) {
        this.t1ans = [];
        this.t1ans.push(1);
        this.t1ans.push(qid + 1);
        this.t1ans.push(this.selectedtool);
      } else if (qid == 1) {
        this.t1ans1 = [];
        this.t1ans1.push(1);
        this.t1ans1.push(qid + 1);
        this.t1ans1.push(this.selectedtool);
      } else if (qid == 2) {
        this.t1ans2 = [];
        this.t1ans2.push(1);
        this.t1ans2.push(qid + 1);
        this.t1ans2.push(this.selectedtool);
      } else if (qid == 3) {
        this.t1ans3 = [];
        this.t1ans3.push(1);
        this.t1ans3.push(qid + 1);
        this.t1ans3.push(this.selectedtool);
      } else if (qid == 4) {
        this.t1ans4 = [];
        this.t1ans4.push(1);
        this.t1ans4.push(qid + 1);
        this.t1ans4.push(this.selectedtool);
      }


    } else {
      this.selectedtool.splice(this.selectedtool.indexOf(item), 1)

    }
  }
  checkedTool1(item: any) {
    if (this.selectedtool1.indexOf(item) != -1) {
      return;
    }
  }
  onChangeTool1(checked: any, item: any, qid: any, typeId: any) {
    if (checked.checked) {
      this.selectedtool1 = [];
      this.selectedtool1.push(item.id);
      // console.log('selected :' + this.selectedtool, qid + 1, typeId + 1)
      if (qid == 0) {
        this.t2ans = [];
        this.t2ans.push(2);
        this.t2ans.push(qid + 1);
        this.t2ans.push(this.selectedtool1);
        console.log("==== :" + this.t2ans)
      } else if (qid == 1) {
        this.t2ans1 = [];
        this.t2ans.push(2);
        this.t2ans1.push(qid + 1);
        this.t2ans1.push(this.selectedtool1);
      } else if (qid == 2) {
        this.t2ans2 = [];
        this.t2ans.push(2);
        this.t2ans2.push(qid + 1);
        this.t2ans2.push(this.selectedtool1);
      } else if (qid == 3) {
        this.t2ans3 = [];
        this.t2ans.push(2);
        this.t2ans3.push(qid + 1);
        this.t2ans3.push(this.selectedtool1);
      } else if (qid == 4) {
        this.t2ans4 = [];
        this.t2ans4.push(1);
        this.t2ans4.push(qid + 1);
        this.t2ans4.push(this.selectedtool1);
      }


    } else {
      this.selectedtool1.splice(this.selectedtool1.indexOf(item), 1)

    }
  }

  checkedTool2(item: any) {
    // if (this.selectedtool.indexOf(item) != -1) {
    //   return;
    // }
  }
  onChangeTool2(checked: any, item: any, qid: any, typeId: any) {
    if (checked.checked) {
      this.selectedtool2 = [];
      this.selectedtool2.push(item.id);
      // console.log('selected :' + this.selectedtool, qid + 1, typeId + 1)
      if (qid == 0) {
        this.t3ans = [];
        this.t3ans.push(3);
        this.t3ans.push(qid + 1);
        this.t3ans.push(this.selectedtool2);
      } else if (qid == 1) {
        this.t3ans1 = [];
        this.t3ans.push(3);
        this.t3ans1.push(qid + 1);
        this.t3ans1.push(this.selectedtool2);
      } else if (qid == 2) {
        this.t3ans2 = [];
        this.t3ans.push(3);
        this.t3ans2.push(qid + 1);
        this.t3ans2.push(this.selectedtool2);
      } else if (qid == 3) {
        this.t3ans3 = [];
        this.t3ans3.push(1);
        this.t3ans3.push(qid + 1);
        this.t3ans3.push(this.selectedtool2);
      } else if (qid == 4) {
        this.t3ans4 = [];
        this.t3ans.push(3);
        this.t3ans4.push(qid + 1);
        this.t3ans4.push(this.selectedtool2);
      } else if (qid == 5) {
        this.t3ans5 = [];
        this.t3ans5.push(3);
        this.t3ans5.push(qid + 1);
        this.t3ans5.push(this.selectedtool2);
      }


    } else {
      this.selectedtool2.splice(this.selectedtool2.indexOf(item), 1)

    }
  }
  checkedTool3(item: any) {
    // if (this.selectedtool.indexOf(item) != -1) {
    //   return;
    // }
  }
  onChangeTool3(checked: any, item: any, qid: any, typeId: any) {
    if (checked.checked) {
      this.selectedtool3 = [];
      this.selectedtool3.push(item.id);
      // console.log('selected :' + this.selectedtool, qid + 1, typeId + 1)
      if (qid == 0) {
        this.t4ans = [];
        this.t4ans.push(4);
        this.t4ans.push(qid + 1);
        this.t4ans.push(this.selectedtool3);
      } else if (qid == 1) {
        this.t4ans1 = [];
        this.t4ans.push(4);
        this.t4ans1.push(qid + 1);
        this.t4ans1.push(this.selectedtool3);
      } else if (qid == 2) {
        this.t4ans2 = [];
        this.t4ans.push(4);
        this.t4ans2.push(qid + 1);
        this.t4ans2.push(this.selectedtool3);
      } else if (qid == 3) {
        this.t4ans3 = [];
        this.t4ans.push(4);
        this.t4ans3.push(qid + 1);
        this.t4ans3.push(this.selectedtool3);
      }


    } else {
      this.selectedtool3.splice(this.selectedtool3.indexOf(item), 1)

    }
  }

  checkedTool4(item: any) {
    // if (this.selectedtool.indexOf(item) != -1) {
    //   return;
    // }
  }
  onChangeTool4(checked: any, item: any, qid: any, typeId: any) {
    if (checked.checked) {
      this.selectedtool4 = [];
      this.selectedtool4.push(item.id);
      // console.log('selected :' + this.selectedtool, qid + 1, typeId + 1)
      if (qid == 0) {
        this.t5ans = [];
        this.t5ans.push(5);
        this.t5ans.push(qid + 1);
        this.t5ans.push(this.selectedtool4);
      } else if (qid == 1) {
        this.t5ans1 = [];
        this.t5ans.push(5);
        this.t5ans1.push(qid + 1);
        this.t5ans1.push(this.selectedtool4);
      } else if (qid == 2) {
        this.t5ans2 = [];
        this.t5ans.push(5);
        this.t5ans2.push(qid + 1);
        this.t5ans2.push(this.selectedtool4);
      } else if (qid == 3) {
        this.t5ans3 = [];
        this.t5ans.push(5);
        this.t5ans3.push(qid + 1);
        this.t5ans3.push(this.selectedtool4);
      } else if (qid == 4) {
        this.t5ans4 = [];
        this.t5ans4.push(5);
        this.t5ans4.push(qid + 1);
        this.t5ans4.push(this.selectedtool4);
      } else if (qid == 5) {
        this.t5ans5 = [];
        this.t5ans5.push(5);
        this.t5ans5.push(qid + 1);
        this.t5ans5.push(this.selectedtool4);
      } else if (qid == 6) {
        this.t5ans6 = [];
        this.t5ans6.push(5);
        this.t5ans6.push(qid + 1);
        this.t5ans6.push(this.selectedtool4);
      } else if (qid == 7) {
        this.t5ans7 = [];
        this.t5ans7.push(5);
        this.t5ans7.push(qid + 1);
        this.t5ans7.push(this.selectedtool4);
      }


    } else {
      this.selectedtool4.splice(this.selectedtool4.indexOf(item), 1)

    }
  }
  checkedTool5(item: any) {
    // if (this.selectedtool.indexOf(item) != -1) {
    //   return;
    // }
  }
  onChangeTool5(checked: any, item: any, qid: any, typeId: any) {
    if (checked.checked) {
      this.selectedtool5 = [];
      this.selectedtool5.push(item.id);
      // console.log('selected :' + this.selectedtool, qid + 1, typeId + 1)
      if (qid == 0) {
        this.t6ans = [];
        this.t6ans.push(6);
        this.t6ans.push(qid + 1);
        this.t6ans.push(this.selectedtool5);
      } else if (qid == 1) {
        this.t6ans1 = [];
        this.t6ans1.push(6);
        this.t6ans1.push(qid + 1);
        this.t6ans1.push(this.selectedtool5);
      } else if (qid == 2) {
        this.t6ans2 = [];
        this.t6ans2.push(6);
        this.t6ans2.push(qid + 1);
        this.t6ans2.push(this.selectedtool5);
      } else if (qid == 3) {
        this.t6ans3 = [];
        this.t6ans3.push(6);
        this.t6ans3.push(qid + 1);
        this.t6ans3.push(this.selectedtool5);
      } else if (qid == 4) {
        this.t6ans4 = [];
        this.t6ans4.push(6);
        this.t6ans4.push(qid + 1);
        this.t6ans4.push(this.selectedtool5);
      } else if (qid == 5) {
        this.t6ans5 = [];
        this.t6ans5.push(6);
        this.t6ans5.push(qid + 1);
        this.t6ans5.push(this.selectedtool);
      } else if (qid == 6) {
        this.t6ans6 = [];
        this.t6ans6.push(6);
        this.t6ans6.push(qid + 1);
        this.t6ans6.push(this.selectedtool5);
      }


    } else {
      this.selectedtool5.splice(this.selectedtool5.indexOf(item), 1)

    }
  }
  checkedObj(item: StdObj) {
    if (this.selectedObj.indexOf(item) != -1) {
      return;
    }
  }
  onChangeObj(checked: any, item: any) {
    if (checked.checked) {
      this.selectedObj.push(item.objId);
      console.log('selected :' + this.selectedObj)




    } else {
      this.selectedObj.splice(this.selectedObj.indexOf(item), 1)
      console.log('selected :' + this.selectedObj)


    }
  }
  checkedLearn(item: StdLearn) {
    if (this.selectedLearn.indexOf(item) != -1) {
      return;
    }
  }
  onChangeLearn(checked: any, item: any) {
    if (checked.checked) {
      this.selectedLearn.push(item.learnid);
      console.log('selected :' + this.selectedLearn)
      //   this.addUnitId();



    } else {
      this.selectedLearn.splice(this.selectedLearn.indexOf(item), 1)
      console.log('selected :' + this.selectedLearn)

      //  this.addUnitId();
    }
  }
  checkedMedia(item: StdMedia) {
    if (this.selectedMedia.indexOf(item) != -1) {
      return;
    }
  }
  onChangeMedia(checked: any, item: any) {
    if (checked.checked) {
      this.selectedMedia.push(item.mediaId);
      console.log('selected :' + this.selectedMedia)
      //   this.addUnitId();



    } else {
      this.selectedMedia.splice(this.selectedMedia.indexOf(item), 1)
      console.log('selected :' + this.selectedMedia)

      //  this.addUnitId();
    }
  }
  getStdObj() {

    this.stdpart2Service.getstdobjective().subscribe((reponse: any) => {
      if (reponse) {
        this.stdObj = reponse;

      } else {
      }
    });
  }

  getStdLearn() {
    this.stdpart2Service.getStdlearnstyle().subscribe((reponse: any) => {
      if (reponse) {
        this.stdLearn = reponse;

      } else {
      }
    });
  } getStdmediastyle() {
    this.stdpart2Service.getStdmediastyle().subscribe((reponse: any) => {
      if (reponse) {
        this.stdMedia = reponse;

      } else {
      }
    });
  }
  getStdtechniqstd() {
    this.stdpart2Service.getStdtechniqstd().subscribe((reponse: any) => {
      if (reponse) {
        this.chniqstd = reponse;

      } else {
      }
    });
  }
  getToolType() {
    this.stdpart2Service.getToolType().subscribe((reponse: any) => {
      if (reponse) {
        this.toolType = reponse;

      } else {
      }
    });
  }
  getToolques() {
    this.stdpart2Service.getToolques().subscribe((reponse: any) => {
      if (reponse) {
        this.toolQ = reponse;
        this.toolQ1 = this.toolQ.filter(
          user => user.toolTypeId === "1");
        this.toolQ2 = this.toolQ.filter(
          user => user.toolTypeId === "2")
        this.toolQ3 = this.toolQ.filter(
          user => user.toolTypeId === "3")
        this.toolQ4 = this.toolQ.filter(
          user => user.toolTypeId === "4")
        this.toolQ5 = this.toolQ.filter(
          user => user.toolTypeId === "5")
        this.toolQ6 = this.toolQ.filter(
          user => user.toolTypeId === "6")
      } else {
      }
    });
  }
  onSubmit() {
    console.log('tec 1:' + this.technic1)
    // console.log('data part 2:'+this.selectedLearn , this.selectedMedia,this.selectedObj);
    this.stdForm1.patchValue({
      selectedLearn: this.selectedLearn,
      selectedMedia: this.selectedMedia,
      selectedObj: this.selectedObj,
    });
    this.stdtechnic.patchValue({
      stdtechnic: this.technic1,
      stdtechnic1: this.technic2,
      stdtechnic2: this.technic3,
      stdtechnic3: this.technic4,
      stdtechnic4: this.technic5,
      stdtechnic5: this.technic6,
      stdtechnic6: this.technic7,
      stdtechnic7: this.technic8,
      stdtechnic8: this.technic9,
      stdtechnic9: this.technic10,
      stdtechnic10: this.technic11,
      stdtechnic11: this.technic12,
    });
    this.stdToolans.patchValue({
      t1ans: this.t1ans,
      t1ans1: this.t1ans1,
      t1ans2: this.t1ans2,
      t1ans3: this.t1ans3,
      t1ans4: this.t1ans4,
      t2ans: this.t2ans,
      t2ans1: this.t2ans1,
      t2ans2: this.t2ans2,
      t2ans3: this.t2ans3,
      t2ans4: this.t2ans4,
      t3ans: this.t3ans,
      t3ans1: this.t3ans1,
      t3ans2: this.t3ans2,
      t3ans3: this.t3ans3,
      t3ans4: this.t3ans4,
      t3ans5: this.t3ans5,
      t4ans: this.t4ans,
      t4ans1: this.t4ans1,
      t4ans2: this.t4ans2,
      t4ans3: this.t4ans3,
      t5ans: this.t5ans,
      t5ans1: this.t5ans1,
      t5ans2: this.t5ans2,
      t5ans3: this.t5ans3,
      t5ans4: this.t5ans4,
      t5ans5: this.t5ans5,
      t5ans6: this.t5ans6,
      t5ans7: this.t5ans7,
      t6ans: this.t6ans,
      t6ans1: this.t6ans1,
      t6ans2: this.t6ans2,
      t6ans3: this.t6ans3,
      t6ans4: this.t6ans4,
      t6ans5: this.t6ans5,
      t6ans6: this.t6ans6,
    })
    this.stdpart2Service.addstdTool(this.stdToolans.getRawValue())
    this.stdpart2Service.addstdCheckPart1(this.stdForm1.getRawValue());
    this.stdpart2Service.addstdTechniq(this.stdtechnic.getRawValue());

  }
}
