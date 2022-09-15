import { LecPart2Service, LecTech, LecTechQ } from './../lec-part2/lec-part2.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LecPart3Service } from './lec-part3.service';

@Component({
    selector: 'app-lec-part3',
    templateUrl: './lec-part3.component.html',
    styleUrls: ['./lec-part3.component.scss']
})
export class LecPart3Component implements OnInit {
    lecTech: LecTech[] = []; lecTechQ: LecTechQ[] = [];
    lecTechQ1: LecTechQ[] = []; lecFroma1ns: any;
    lecTechlans: FormGroup; lectool: any;
    lecTechQ2: LecTechQ[] = []; lecTechQ3: LecTechQ[] = []; lecTechQ4: LecTechQ[] = [];
    t1ans: any; t1ans1: any; t1ans2: any; t1ans3: any;
    t2ans: any; t2ans1: any; t2ans2: any; t2ans3: any;
    t3ans: any; t3ans1: any; t3ans2: any; t3ans3: any;
    t4ans: any; t4ans1: any; t4ans2: any;
    lecFrom2ans: any;
    selectedtech: any[] = []; selectedtech1: any[] = []; selectedtech2: any[] = []; selectedtech3: any[] = [];
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
        private fb: FormBuilder,
        private _lecPart3Service: LecPart3Service,
        private router: Router,
        private _lecPart2Service: LecPart2Service) {
        this.lecTechlans = this.fb.group({
            t1ans: ["", Validators.required],
            t1ans1: ["", Validators.required],
            t1ans2: ["", Validators.required],
            t1ans3: ["", Validators.required],

            t2ans: ["", Validators.required],
            t2ans1: ["", Validators.required],
            t2ans2: ["", Validators.required],
            t2ans3: ["", Validators.required],

            t3ans: ["", Validators.required],
            t3ans1: ["", Validators.required],
            t3ans2: ["", Validators.required],
            t3ans3: ["", Validators.required],

            t4ans: ["", Validators.required],
            t4ans1: ["", Validators.required],
            t4ans2: ["", Validators.required],

        });
    }

    ngOnInit(): void {
        this.getLecresource();
        this.getLectechq();
        this.getStdpart1();
        this.getlectool();
        this.getlecInfo();
    }
    getLecresource() {
        this.lecPart2Service.getLectech().subscribe((reponse: any) => {
            if (reponse) {
                this.lecTech = reponse;

            } else {
            }
        });
    }
    getlectool() {
        this.lectool = this.lecPart2Service.getlectool();
    }

    getLectechq() {
        this.lecPart2Service.getLectechq().subscribe((reponse: any) => {
            if (reponse) {
                this.lecTechQ = reponse;

                this.lecTechQ1 = this.lecTechQ.filter(
                    user => user.techAcTitleId === "1");
                this.lecTechQ2 = this.lecTechQ.filter(
                    user => user.techAcTitleId === "2");
                this.lecTechQ3 = this.lecTechQ.filter(
                    user => user.techAcTitleId === "3");
                this.lecTechQ4 = this.lecTechQ.filter(
                    user => user.techAcTitleId === "4");
            } else {
            }
        });
    }
    checkedTech(item: any) {
        if (this.selectedtech.indexOf(item) != -1) {
            return;
        }
    }
    onChangeTech(checked: any, item: any, qid: any) {
        if (checked.checked) {
            this.selectedtech = [];
            this.selectedtech.push(item.id);
            // console.log('selected :' + this.selectedtool, qid + 1, typeId + 1)
            if (qid == 0) {
                this.t1ans = [];
                this.t1ans.push(1);
                this.t1ans.push(qid + 1);
                this.t1ans.push(this.selectedtech);
            } else if (qid == 1) {
                this.t1ans1 = [];
                this.t1ans1.push(1);
                this.t1ans1.push(qid + 1);
                this.t1ans1.push(this.selectedtech);
            } else if (qid == 2) {
                this.t1ans2 = [];
                this.t1ans2.push(1);
                this.t1ans2.push(qid + 1);
                this.t1ans2.push(this.selectedtech);
            } else if (qid == 3) {
                this.t1ans3 = [];
                this.t1ans3.push(1);
                this.t1ans3.push(qid + 1);
                this.t1ans3.push(this.selectedtech);
            }


        } else {
            this.selectedtech.splice(this.selectedtech.indexOf(item), 1)

        }
    }

    checkedTech1(item: any) {
        if (this.selectedtech1.indexOf(item) != -1) {
            return;
        }
    }
    onChangeTech1(checked: any, item: any, qid: any) {
        if (checked.checked) {
            this.selectedtech1 = [];
            this.selectedtech1.push(item.id);
            // console.log('selected :' + this.selectedtool, qid + 1, typeId + 1)
            if (qid == 0) {
                this.t2ans = [];
                this.t2ans.push(2);
                this.t2ans.push(qid + 1);
                this.t2ans.push(this.selectedtech1);
            } else if (qid == 1) {
                this.t2ans1 = [];
                this.t2ans1.push(2);
                this.t2ans1.push(qid + 1);
                this.t2ans1.push(this.selectedtech1);
            } else if (qid == 2) {
                this.t2ans2 = [];
                this.t2ans2.push(2);
                this.t2ans2.push(qid + 1);
                this.t2ans2.push(this.selectedtech1);
            } else if (qid == 3) {
                this.t2ans3 = [];
                this.t2ans3.push(2);
                this.t2ans3.push(qid + 1);
                this.t2ans3.push(this.selectedtech1);
            }


        } else {
            this.selectedtech1.splice(this.selectedtech1.indexOf(item), 1)

        }
    }

    checkedTech2(item: any) {
        if (this.selectedtech2.indexOf(item) != -1) {
            return;
        }
    }
    onChangeTech2(checked: any, item: any, qid: any) {
        if (checked.checked) {
            this.selectedtech2 = [];
            this.selectedtech2.push(item.id);
            // console.log('selected :' + this.selectedtool, qid + 1, typeId + 1)
            if (qid == 0) {
                this.t3ans = [];
                this.t3ans.push(3);
                this.t3ans.push(qid + 1);
                this.t3ans.push(this.selectedtech2);
            } else if (qid == 1) {
                this.t3ans1 = [];
                this.t3ans1.push(3);
                this.t3ans1.push(qid + 1);
                this.t3ans1.push(this.selectedtech2);
            } else if (qid == 2) {
                this.t3ans2 = [];
                this.t3ans2.push(3);
                this.t3ans2.push(qid + 1);
                this.t3ans2.push(this.selectedtech2);
            } else if (qid == 3) {
                this.t3ans3 = [];
                this.t3ans3.push(3);
                this.t3ans3.push(qid + 1);
                this.t3ans3.push(this.selectedtech2);
            }


        } else {
            this.selectedtech2.splice(this.selectedtech2.indexOf(item), 1)

        }
    }
    checkedTech4(item: any) {
        if (this.selectedtech1.indexOf(item) != -1) {
            return;
        }
    }
    onChangeTech4(checked: any, item: any, qid: any) {
        if (checked.checked) {
            this.selectedtech3 = [];
            this.selectedtech3.push(item.id);
            console.log('selected :' + this.selectedtech3, qid + 1)
            if (qid == 0) {
                this.t4ans = [];
                this.t4ans.push(4);
                this.t4ans.push(qid + 1);
                this.t4ans.push(this.selectedtech3);
            } else if (qid == 1) {
                this.t4ans1 = [];
                this.t4ans1.push(4);
                this.t4ans1.push(qid + 1);
                this.t4ans1.push(this.selectedtech3);
            } else if (qid == 2) {
                this.t4ans2 = [];
                this.t4ans2.push(4);
                this.t4ans2.push(qid + 1);
                this.t4ans2.push(this.selectedtech3);
            }


        } else {
            this.selectedtech3.splice(this.selectedtech3.indexOf(item), 1)

        }
    }
    onSubmit() {
        this.lecTechlans.patchValue({
            t1ans: this.t1ans,
            t1ans1: this.t1ans1,
            t1ans2: this.t1ans2,
            t1ans3: this.t1ans3,

            t2ans: this.t2ans,
            t2ans1: this.t2ans1,
            t2ans2: this.t2ans2,
            t2ans3: this.t2ans3,

            t3ans: this.t3ans,
            t3ans1: this.t3ans1,
            t3ans2: this.t3ans2,
            t3ans3: this.t3ans3,

            t4ans: this.t4ans,
            t4ans1: this.t4ans1,
            t4ans2: this.t4ans2,
        });
        if (this.lecTechlans.valid) {
            console.log('1233333')
            this._lecPart3Service.addlecfrom(this.lecFroma1ns, this.lecFrom2ans).subscribe((reponse: any) => {
                if (reponse) {
                    console.log('123')
                    this.addtool();
                } else {
                    Swal.fire({
                        showConfirmButton: false,
                        timer: 2000,
                        timerProgressBar: true,
                        icon: 'error',
                        title: 'เกิดข้อผิดพลาดในการบันทึกข้อมูล',
                    })
                }
            })
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
    addtool() {
        this._lecPart3Service.addlecTool(this.lectool, this.lecFroma1ns.majorname).subscribe((reponse: any) => {
            if (reponse) {
                this.addLecTech();
            } else {
                Swal.fire({
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    icon: 'error',
                    title: 'เกิดข้อผิดพลาดในการบันทึกข้อมูล',
                })
            }
        });
    }
    addLecTech() {
        this._lecPart3Service.addlecTech(this.lecTech, this.lecFroma1ns.majorname).subscribe((reponse: any) => {
            if (reponse) {
                Swal.fire({
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    icon: 'success',
                    title: 'บันทึกข้อมูลสำเร็จ',
                }).then((sw) => {
                    if (sw.isDismissed) {
                        this.router.navigate(['/stdDashboard']);
                    }
                });
            } else {
                Swal.fire({
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    icon: 'error',
                    title: 'เกิดข้อผิดพลาดในการบันทึกข้อมูล',
                })
            }
        });


    }
    getStdpart1() {
        this.lecFrom2ans = '';
        this.lecFrom2ans = this._lecPart2Service.getlecForm1();
        console.log('obj ID : ' + this._lecPart2Service.getlecForm1())
    }
    getlecInfo() {
        this.lecFroma1ns = '';
        this.lecFroma1ns = this._lecPart2Service.getlecform();
        console.log('major ID : ' + this._lecPart2Service.getlecform().age)
    }
}
