import { Stdpart2Service, ToolType, ToolQ } from './../stdpart2/stdpart2.service';
import { LecPart2Service, LecObj, Pedagory, LecProcess, LecTool, LecAss, LecResource } from './lec-part2.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
    selector: 'app-lec-part2',
    templateUrl: './lec-part2.component.html',
    styleUrls: ['./lec-part2.component.scss']
})
export class LecPart2Component implements OnInit {
    lecForm2: FormGroup;
    lecToolans: FormGroup;
    selectedtool: any[]=[]; selectedtool1: any[]=[]; selectedtool2: any[]=[]; selectedtool3: any[]=[]; selectedtool4: any[]=[];selectedtool5: any[]=[];
    t1ans: any; t1ans1: any; t1ans2: any; t1ans3: any; t1ans4: any;
    t2ans: any; t2ans1: any; t2ans2: any; t2ans3: any; t2ans4: any;
    t3ans: any; t3ans1: any; t3ans2: any; t3ans3: any; t3ans4: any; t3ans5: any;
    t4ans: any; t4ans1: any; t4ans2: any; t4ans3: any;
    t5ans: any; t5ans1: any; t5ans2: any; t5ans3: any; t5ans4: any; t5ans5: any; t5ans6: any; t5ans7: any;
    t6ans: any; t6ans1: any; t6ans2: any; t6ans3: any; t6ans4: any; t6ans5: any; t6ans6: any;
    lecObj: LecObj[] = []; lecResource: LecResource[] = []; selected: any[] = [];
    selecPedagory: any[] = []; selecProcess: any[] = []; selecTool: any[] = []; selectAsses: any[] = [];
    lecpedagory: Pedagory[] = []; selectResource: any[] = [];
    lecProcess: LecProcess[] = [];
    lecTool: LecTool[] = []; lecAss: LecAss[] = [];
    toolType: ToolType[] = [];
    toolQ: ToolQ[] = []; toolQ1: ToolQ[] = []; toolQ2: ToolQ[] = [];
    toolQ3: ToolQ[] = []; toolQ4: ToolQ[] = []; toolQ5: ToolQ[] = []; toolQ6: ToolQ[] = [];
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
    constructor(private lecPart2Service: LecPart2Service,
        private stdpart2Service: Stdpart2Service,
        private fb: FormBuilder,
        private router: Router,) {
        this.lecForm2 = this.fb.group({
            selecPedagory: ["", Validators.required],
            selected: ["", Validators.required],
            selectResource: ["", Validators.required],
            selecTool: ["", Validators.required],
            selectAsses: ["", Validators.required],
            selecProcess: ["", Validators.required],



        });
        this.lecToolans = this.fb.group({
            t1ans: ["", Validators.required],
            t1ans1: ["", Validators.required],
            t1ans2: ["", Validators.required],
            t1ans3: ["", Validators.required],
            t1ans4: ["", Validators.required],
            t2ans: ["", Validators.required],
            t2ans1: ["", Validators.required],
            t2ans2: ["", Validators.required],
            t2ans3: ["", Validators.required],
            t2ans4: ["", Validators.required],
            t3ans: ["", Validators.required],
            t3ans1: ["", Validators.required],
            t3ans2: ["", Validators.required],
            t3ans3: ["", Validators.required],
            t3ans4: ["", Validators.required],
            t3ans5: ["", Validators.required],
            t4ans: ["", Validators.required],
            t4ans1: ["", Validators.required],
            t4ans2: ["", Validators.required],
            t4ans3: ["", Validators.required],
            t5ans: ["", Validators.required],
            t5ans1: ["", Validators.required],
            t5ans2: ["", Validators.required],
            t5ans3: ["", Validators.required],
            t5ans4: ["", Validators.required],
            t5ans5: ["", Validators.required],
            t5ans6: ["", Validators.required],
            t5ans7: ["", Validators.required],
            t6ans: ["", Validators.required],
            t6ans1: ["", Validators.required],
            t6ans2: ["", Validators.required],
            t6ans3: ["", Validators.required],
            t6ans4: ["", Validators.required],
            t6ans5: ["", Validators.required],
            t6ans6: ["", Validators.required],
        });
    }

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
    checkedTool1(item: any) {
        if (this.selectedtool.indexOf(item) != -1) {
          return;
        }
      }
      onChangeTool1(checked: any, item: any, qid: any) {
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

      checkedTool2(item: any) {
        if (this.selectedtool1.indexOf(item) != -1) {
          return;
        }
      }
      onChangeTool2(checked: any, item: any, qid: any) {
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
            this.t2ans1.push(2);
            this.t2ans1.push(qid + 1);
            this.t2ans1.push(this.selectedtool1);
          } else if (qid == 2) {
            this.t2ans2 = [];
            this.t2ans2.push(2);
            this.t2ans2.push(qid + 1);
            this.t2ans2.push(this.selectedtool1);
          } else if (qid == 3) {
            this.t2ans3 = [];
            this.t2ans3.push(2);
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

    checkedTool3(item: any) {
        // if (this.selectedtool.indexOf(item) != -1) {
        //   return;
        // }
      }
      onChangeTool3(checked: any, item: any, qid: any) {
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
            this.t3ans2.push(3);
            this.t3ans2.push(qid + 1);
            this.t3ans2.push(this.selectedtool2);
          } else if (qid == 3) {
            this.t3ans3 = [];
            this.t3ans3.push(1);
            this.t3ans3.push(qid + 1);
            this.t3ans3.push(this.selectedtool2);
          } else if (qid == 4) {
            this.t3ans4 = [];
            this.t3ans4.push(3);
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
      checkedTool4(item: any) {
        if (this.selectedtool3.indexOf(item) != -1) {
          return;
        }
      }
      onChangeTool4(checked: any, item: any, qid: any, ) {
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
            this.t4ans1.push(4);
            this.t4ans1.push(qid + 1);
            this.t4ans1.push(this.selectedtool3);
          } else if (qid == 2) {
            this.t4ans2 = [];
            this.t4ans2.push(4);
            this.t4ans2.push(qid + 1);
            this.t4ans2.push(this.selectedtool3);
          } else if (qid == 3) {
            this.t4ans3 = [];
            this.t4ans3.push(4);
            this.t4ans3.push(qid + 1);
            this.t4ans3.push(this.selectedtool3);
          }
    
    
        } else {
          this.selectedtool3.splice(this.selectedtool3.indexOf(item), 1)
    
        }
      }
    
      checkedTool5(item: any) {
        if (this.selectedtool4.indexOf(item) != -1) {
          return;
        }
      }
      onChangeTool5(checked: any, item: any, qid: any) {
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
            this.t5ans1.push(5);
            this.t5ans1.push(qid + 1);
            this.t5ans1.push(this.selectedtool4);
          } else if (qid == 2) {
            this.t5ans2 = [];
            this.t5ans2.push(5);
            this.t5ans2.push(qid + 1);
            this.t5ans2.push(this.selectedtool4);
          } else if (qid == 3) {
            this.t5ans3 = [];
            this.t5ans3.push(5);
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
      checkedTool6(item: any) {
        if (this.selectedtool5.indexOf(item) != -1) {
          return;
        }
      }
      onChangeTool6(checked: any, item: any, qid: any,) {
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
    onSubmit() {
        this.lecForm2.patchValue({
            selecPedagory: this.selecPedagory,
            selected: this.selected,
            selectResource: this.selectResource,
            selecTool: this.selecTool,
            selectAsses: this.selectAsses,
            selecProcess: this.selecProcess,
        });
        this.lecToolans.patchValue({
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
        this.lecPart2Service.addlecForm1(this.lecForm2.getRawValue());
        this.lecPart2Service.addlectool(this.lecToolans.getRawValue());
        if (this.lecForm2.valid && this.lecToolans.valid) {
            this.router.navigate(['/lecturerForm3']);
        } else {
            Swal.fire({
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                icon: 'error',
                title: 'กรุณากรอกข้อมูลให้ครบถ้วน',
            })
        }
    }
}
