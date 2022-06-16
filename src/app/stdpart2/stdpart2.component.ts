import { StdObj, Stdpart2Service, StdLearn, StdMedia, StdTech, ToolType, ToolQ } from './stdpart2.service';
import { Component, OnInit } from '@angular/core';
import { SankeyNodeObject } from 'highcharts';
import { LecEdu } from '../lec-part1/lec-part1.service';

@Component({
    selector: 'app-stdpart2',
    templateUrl: './stdpart2.component.html',
    styleUrls: ['./stdpart2.component.scss']
})
export class Stdpart2Component implements OnInit {
    stdObj: StdObj[] = [];   selectedObj: StdObj[] = [];
    stdLearn: StdLearn[] = [];selectedLearn: StdLearn[] = [];
    stdMedia: StdMedia[] = [];selectedMedia: StdMedia[] = [];
    chniqstd: StdTech[] = [];
    toolType: ToolType[] = [];
    toolQ: ToolQ[] = []; toolQ1: ToolQ[] = []; toolQ2: ToolQ[] = [];
    toolQ3: ToolQ[] = []; toolQ4: ToolQ[] = []; toolQ5: ToolQ[] = []; toolQ6: ToolQ[] = [];
    constructor(private stdpart2Service: Stdpart2Service) { }

    ngOnInit(): void {
        this.getStdObj(); this.getStdmediastyle();
        this.getStdLearn(); this.getStdtechniqstd();
        this.getToolType(); this.getToolques();
    }
    checkedObj(item: StdObj) {
        if (this.selectedObj.indexOf(item) != -1) {
          return;
        }
      }
      onChangeObj(checked: any, item: any) {
        if (checked.checked) {
          this.selectedObj.push(item.objId);
       console.log('selected :'+this.selectedObj)
       //   this.addUnitId();
    
    
    
        } else {
          this.selectedObj.splice(this.selectedObj.indexOf(item), 1)
          console.log('selected :'+this.selectedObj)
       
        //  this.addUnitId();
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
       console.log('selected :'+this.selectedLearn)
       //   this.addUnitId();
    
    
    
        } else {
          this.selectedLearn.splice(this.selectedLearn.indexOf(item), 1)
          console.log('selected :'+this.selectedLearn)
       
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
       console.log('selected :'+this.selectedMedia)
       //   this.addUnitId();
    
    
    
        } else {
          this.selectedMedia.splice(this.selectedMedia.indexOf(item), 1)
          console.log('selected :'+this.selectedMedia)
       
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

}
