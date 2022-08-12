import { Stdpart4Service, PersonTest } from './stdpart4.service';
import { Component, OnInit } from '@angular/core';
import { Stdpart2Service } from '../stdpart2/stdpart2.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stdpart4',
  templateUrl: './stdpart4.component.html',
  styleUrls: ['./stdpart4.component.scss']
})
export class Stdpart4Component implements OnInit {
  personTest: PersonTest[] = [];
  valueStdPart1: any;
  valueStdCheckPart1: any;
  valueStdTech: any;
  bigFive1: any[] = [];
  bigFive2: any[] = [];
  bigFive3: any[] = [];
  bigFive4: any[] = [];
  bigFive5: any[] = [];
  bigFive6: any[] = [];
  bigFive7: any[] = [];
  bigFive8: any[] = [];
  bigFive9: any[] = [];
  bigFive10: any[] = [];

  radioValue: any = [
    {
      id: 7,
      name: "7"
    }, {
      id: 6,
      name: "6"
    },
    {
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
    stdBigfive: FormGroup;
  selectedradio: any;
  constructor(private stdPasrt4Service: Stdpart4Service,
    private _stdpart2Service: Stdpart2Service,
    private fb: FormBuilder,) {
      this.stdBigfive = this.fb.group({
        bigFive: [""],
        bigFive1: [""],
        bigFive2: [""],
        bigFive3: [""],
        bigFive4: [""],
        bigFive5: [""],
        bigFive6: [""],
        bigFive7: [""],
        bigFive8: [""],
        bigFive9: [""], 
      });
  }

  ngOnInit(): void {
    this.getStdpart1();
    this.getStdtechniqstd();
    this.getStdCheckpart1();
    this.getStdTecniq();
  }
  getStdtechniqstd() {
    this.stdPasrt4Service.getstdPersontest().subscribe((reponse: any) => {
      if (reponse) {
        this.personTest = reponse;

      } else {
      }
    });
  }

  onChangeradio(checked: any, item: any, qid: any) {
    if (checked.checked) {
      this.selectedradio = [];
      this.selectedradio.push(item.id);
  
      if (qid == 0) {
        this.bigFive1= [];
        this.bigFive1.push(qid + 1);
        this.bigFive1.push(this.selectedradio);
        console.log('tec 1' + this.bigFive1)

      } else if (qid == 1) {
        this.bigFive2 = [];
        this.bigFive2.push(qid + 1);
        this.bigFive2.push(this.selectedradio);
      
      }
      else if (qid == 2) {
        this.bigFive3 = [];
        this.bigFive3.push(qid + 1);
        this.bigFive3.push(this.selectedradio);
      }
      else if (qid == 3) {
        this.bigFive4 = [];
        this.bigFive4.push(qid + 1);
        this.bigFive4.push(this.selectedradio);
      }
      else if (qid == 4) {
        this.bigFive5 = [];
        this.bigFive5.push(qid + 1);
        this.bigFive5.push(this.selectedradio);
      }
      else if (qid == 5) {
        this.bigFive6 = [];
        this.bigFive6.push(qid + 1);
        this.bigFive6.push(this.selectedradio);
      }
      else if (qid == 6) {
        this.bigFive7 = [];
        this.bigFive7.push(qid + 1);
        this.bigFive7.push(this.selectedradio);
      }
      else if (qid == 7) {
        this.bigFive8 = [];
        this.bigFive8.push(qid + 1);
        this.bigFive8.push(this.selectedradio);
      }
      else if (qid == 8) {
        this.bigFive9 = [];
        this.bigFive9.push(qid + 1);
        this.bigFive9.push(this.selectedradio);
      }
      else if (qid == 9) {
        this.bigFive10 = [];
        this.bigFive10.push(qid + 1);
        this.bigFive10.push(this.selectedradio);
      }
      
      // console.log('selected :' + this.selectedradio, qid + 1)
    } else {
      this.selectedradio.splice(this.selectedradio.indexOf(item), 1)
      // console.log('selected :' + this.selectedradio, qid + 1)
    }
  }
  getStdpart1() {
    this.valueStdPart1 = '';
    this.valueStdPart1 = this._stdpart2Service.getstdPart1();
  }
  getStdCheckpart1() {
    this.valueStdCheckPart1 = '';
    this.valueStdCheckPart1 = this._stdpart2Service.getstdCheckPart1();
    console.log('Check :' + this.valueStdCheckPart1.selectedLearn);
  }
  getStdTecniq() {
    this.valueStdTech = '';
    this.valueStdTech = this._stdpart2Service.getstdTechniq();
    console.log('tech :' + this.valueStdTech.technic1, this.valueStdTech.technic2);
  }
  sendAns(){
    this.stdBigfive.patchValue({
      bigFive: this.bigFive1,
      bigFive1: this.bigFive2,
      bigFive2: this.bigFive3,
      bigFive3: this.bigFive4,
      bigFive4: this.bigFive5,
      bigFive5: this.bigFive6,
      bigFive6: this.bigFive7,
      bigFive7: this.bigFive8,
      bigFive8: this.bigFive9,
      bigFive9: this.bigFive10, 
    });
    
  }
}
