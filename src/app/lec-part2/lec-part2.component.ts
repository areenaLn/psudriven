import { Stdpart2Service, ToolType, ToolQ } from './../stdpart2/stdpart2.service';
import { LecPart2Service, LecObj, Pedagory, LecProcess, LecTool, LecAss, LecResource } from './lec-part2.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-lec-part2',
    templateUrl: './lec-part2.component.html',
    styleUrls: ['./lec-part2.component.scss']
})
export class LecPart2Component implements OnInit {
    lecObj: LecObj[] = []; lecResource: LecResource[] = []; selected: any[] = [];
    selecPedagory: any[] = []; selecProcess: any[] = [];selecTool: any[] = [];selectAsses:any[]=[];
    lecpedagory: Pedagory[] = []; selectResource:any[]=[];
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
        this.getLecassess(); this.getLecresource();
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
    } getLecassess() {
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
    checkedLecobj(item: LecObj) {
        if (this.selected.indexOf(item) != -1) {
            return;
        }
    }
    onChangeLeObj(checked: any, item: any) {
        if (checked.checked) {
            this.selected.push(item.lecObjId);
            console.log('selected :' + this.selected)
            //   this.addUnitId();



        } else {
            this.selected.splice(this.selected.indexOf(item), 1)
            console.log('selected :' + this.selected)

            //  this.addUnitId();
        }
    }

    checkedPedogory(item: Pedagory) {
        if (this.selecPedagory.indexOf(item) != -1) {
            return;
        }
    }
    onChangePedagory(checked: any, item: any) {
        if (checked.checked) {
            this.selecPedagory.push(item.pedagoryId);
            console.log('selected :' + this.selecPedagory)
            //   this.addUnitId();



        } else {
            this.selecPedagory.splice(this.selecPedagory.indexOf(item), 1)
            console.log('selected :' + this.selecPedagory)

            //  this.addUnitId();
        }
    } ProcessPedogory(item: LecProcess) {
        if (this.selecProcess.indexOf(item) != -1) {
            return;
        }
    }
    onChangeProcess(checked: any, item: any) {
        if (checked.checked) {
            this.selecProcess.push(item.lecProcassId);
            console.log('selected :' + this.selecProcess)
            //   this.addUnitId();



        } else {
            this.selecProcess.splice(this.selecProcess.indexOf(item), 1)
            console.log('selected :' + this.selecProcess)

            //  this.addUnitId();
        }
    }
    checkedTool(item: LecTool) {
        if (this.selecTool.indexOf(item) != -1) {
            return;
        }
    }
    onChangeTool(checked: any, item: any) {
        if (checked.checked) {
            this.selecTool.push(item.lecToolId);
            console.log('selected :' + this.selecTool)
            //   this.addUnitId();



        } else {
            this.selecTool.splice(this.selecTool.indexOf(item), 1)
            console.log('selected :' + this.selecTool)

            //  this.addUnitId();
        }
    } 
    checkedAss(item: LecAss) {
        if (this.selectAsses.indexOf(item) != -1) {
            return;
        }
    }
    onChangeAss(checked: any, item: any) {
        if (checked.checked) {
            this.selectAsses.push(item.lecAssessId);
            console.log('selected :' + this.selectAsses)
          



        } else {
            this.selectAsses.splice(this.selectAsses.indexOf(item), 1)
            console.log('selected :' + this.selectAsses)

           
        }
    } 
    checkedRes(item: LecResource) {
        if (this.selectResource.indexOf(item) != -1) {
            return;
        }
    }
    onChangeRes(checked: any, item: any) {
        if (checked.checked) {
            this.selectResource.push(item.lecResourceID);
            console.log('selected :' + this.selectResource)
          



        } else {
            this.selectResource.splice(this.selectResource.indexOf(item), 1)
            console.log('selected :' + this.selectResource)

           
        }
    } 
}
