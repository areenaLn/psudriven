import { Stdpart2Service, ToolType, ToolQ } from './../stdpart2/stdpart2.service';
import { LecPart2Service, LecObj, Pedagory, LecProcess, LecTool, LecAss, LecResource } from './lec-part2.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-lec-part2',
    templateUrl: './lec-part2.component.html',
    styleUrls: ['./lec-part2.component.scss']
})
export class LecPart2Component implements OnInit {
    lecObj: LecObj[] = [];lecResource:LecResource[]=[];
    lecpedagory: Pedagory[] = [];
    lecProcess: LecProcess[] = [];
    lecTool: LecTool[] = []; lecAss: LecAss[] = [];
    toolType: ToolType[] = [];
    toolQ: ToolQ[] = []; toolQ1: ToolQ[] = []; toolQ2: ToolQ[] = [];
    toolQ3: ToolQ[] = []; toolQ4: ToolQ[] = []; toolQ5: ToolQ[] = []; toolQ6: ToolQ[] = [];
    constructor(private lecPart2Service: LecPart2Service, private stdpart2Service: Stdpart2Service) { }

    ngOnInit(): void {
        this.getLecobj();
        this.getLecpedagory();
        this.getLecprocass();
        this.getLectool();
        this.getToolType(); this.getToolques();
        this.getLecassess();this.getLecresource();
    }
    getLecobj() {
        this.lecPart2Service.getLecobj().subscribe((reponse: any) => {
            if (reponse) {
                this.lecObj = reponse;

            } else {
            }
        });
    }
    getLecpedagory() {
        this.lecPart2Service.getLecpedagory().subscribe((reponse: any) => {
            if (reponse) {
                this.lecpedagory = reponse;

            } else {
            }
        });
    }
    getLecresource() {
        this.lecPart2Service.getLecresource().subscribe((reponse: any) => {
            if (reponse) {
                this.lecResource = reponse;

            } else {
            }
        });
    }

    getLectool() {
        this.lecPart2Service.getLectool().subscribe((reponse: any) => {
            if (reponse) {
                this.lecTool = reponse;

            } else {
            }
        });
    }
    getLecprocass() {
        this.lecPart2Service.getLecprocass().subscribe((reponse: any) => {
            if (reponse) {
                this.lecProcess = reponse;

            } else {
            }
        });
    }  getLecassess() {
        this.lecPart2Service.getLecassess().subscribe((reponse: any) => {
            if (reponse) {
                this.lecAss = reponse;

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
