import { StdObj, Stdpart2Service, StdLearn, StdMedia, StdTech, ToolType, ToolQ } from './stdpart2.service';
import { Component, OnInit } from '@angular/core';
import { SankeyNodeObject } from 'highcharts';
import { LecEdu } from '../lec-part1/lec-part1.service';
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
  chniqstd: StdTech[] = []; selectedtool: ToolQ[] = [];
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
  }

  ngOnInit(): void {
    this.getStdObj(); this.getStdmediastyle();
    this.getStdLearn(); this.getStdtechniqstd();
    this.getToolType(); this.getToolques();
  }
  checkedradio(item: any) {
    if (this.selectedObj.indexOf(item) != -1) {
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
        console.log('tec 1 ' + this.technic1)
        console.log('tec 2 ' + this.technic2)
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
    if (this.selectedObj.indexOf(item) != -1) {
      return;
    }
  }
  onChangeTool(checked: any, item: any, qid: any, typeId: any) {
    if (checked.checked) {
      this.selectedtool = [];
      this.selectedtool.push(item.id);
      console.log('selected :' + this.selectedtool, qid + 1, typeId + 1)
    } else {
      this.selectedtool.splice(this.selectedtool.indexOf(item), 1)
      console.log('selected :' + this.selectedtool)
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
    this.stdpart2Service.addstdCheckPart1(this.stdForm1.getRawValue());
    this.stdpart2Service.addstdTechniq(this.stdtechnic.getRawValue());

  }
}
