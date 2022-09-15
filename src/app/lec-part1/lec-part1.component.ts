import { LecPart1Service, LecPos, LecExp, LecEdu } from './lec-part1.service';
import { Stdpart1Service, Major, Religion } from './../stdpart1/stdpart1.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LecPart2Service } from '../lec-part2/lec-part2.service';
@Component({
    selector: 'app-lec-part1',
    templateUrl: './lec-part1.component.html',
    styleUrls: ['./lec-part1.component.scss']
})
export class LecPart1Component implements OnInit {
    valueSelect!: string; lecEdu: LecEdu[] = []; sex: any;
    campus: Major[] = []; nation: any; expert1: any; selectedSex: any[] = [];
    major: Major[] = []; lecPos: LecPos[] = [];
    religion: Religion[] = []; age: any; expert2: any; expert3: any;
    lecExp: LecExp[] = []; campus1: any; major1: any; position: any; experient: any;
    lecLevel: any; religions: any;
    lecForm: FormGroup;
    sexlist: any = [{
        id: 1,
        name: "ชาย"
    }, {
        id: 2,
        name: "หญิง"
    }]
    constructor(
        private fb: FormBuilder,
        private router: Router,
        private stdService: Stdpart1Service,
        private lecPart1Service: LecPart1Service,
        private _lecPart2Service: LecPart2Service) {
        this.lecForm = this.fb.group({
            sex: ["", [Validators.required]],
            age: ["", [Validators.required]],
            religion: ["", [Validators.required]],
            nation: ["", [Validators.required]],
            lecpos: ["", [Validators.required]],
            lecExp: ["", [Validators.required]],
            majorname: ["", [Validators.required]],
            campus: ["", [Validators.required]],
            expert1: ["", [Validators.required]],
            expert2: ["", [Validators.required]],
            expert3: ["", [Validators.required]],
            lecEdu: ["", [Validators.required]],

        });
    }

    ngOnInit(): void {
        this.getCam();
        this.getReligion();
        this.getMajor();
        this.getLecPos();
        this.getLecExp();
        this.getlecEdu();
    }
    selectOrganization() {
        var lecLevel = (document.getElementById("lecLevel") as HTMLSelectElement)
            .value;
        var religions = (document.getElementById("religion") as HTMLSelectElement)
            .value;
        var campus1 = (document.getElementById("campus1") as HTMLSelectElement)
            .value;
        var major = (document.getElementById("majorname") as HTMLSelectElement)
            .value;
        var position = (document.getElementById("position") as HTMLSelectElement)
            .value;
        var experient = (document.getElementById("experient") as HTMLSelectElement)
            .value;
        this.lecLevel = lecLevel;
        this.religions = religions;
        this.campus1 = campus1;
        this.major1 = major;
        this.position = position;
        this.experient = experient;
    }
    getDataPart1() {
        this.age = (document.getElementById("age") as HTMLSelectElement)
            .value;
        this.nation = (document.getElementById("nation") as HTMLSelectElement)
            .value;
        this.expert1 = (document.getElementById("expert1") as HTMLSelectElement)
            .value;
        this.expert2 = (document.getElementById("expert2") as HTMLSelectElement)
            .value;
        this.expert3 = (document.getElementById("expert3") as HTMLSelectElement)
            .value;
        this.sex = (document.getElementById("sex") as HTMLSelectElement)
            .value;

        this.lecForm.patchValue({
            sex: this.selectedSex,
            age: this.age,
            religion: this.religions,
            nation: this.nation,
            lecpos: this.position,
            lecExp: this.experient,
            majorname: this.major1,
            campus: this.campus1,
            expert1: this.expert1,
            expert2: this.expert2,
            expert3: this.expert3,
            lecEdu: this.lecLevel,
        });
        this.onSubmit();






    }
    checkedObj(item: any) {
        if (this.selectedSex.indexOf(item) != -1) {
            return;
        }
    }
    onChangeObj(checked: any, item: any) {
        if (checked.checked) {
            this.selectedSex = [];
            this.selectedSex.push(item.name);
            console.log('selected  Sex:' + this.selectedSex)
        } else {
            this.selectedSex.splice(this.selectedSex.indexOf(item), 1)
            console.log('selected Sex:' + this.selectedSex)
        }
    }
    getlecEdu() {

        this.lecPart1Service.getLecEdu().subscribe((reponse: any) => {
            if (reponse) {
                this.lecEdu = reponse;

            } else {
            }
        });
    }
    getCam() {

        this.stdService.getRedeemRe().subscribe((reponse: any) => {
            if (reponse) {
                this.campus = reponse;

            } else {
            }
        });
    }
    getReligion() {

        this.stdService.getRelogion().subscribe((reponse: any) => {
            if (reponse) {
                this.religion = reponse;

            } else {
            }
        });
    }
    getMajor() {

        this.stdService.getmajor().subscribe((reponse: any) => {
            if (reponse) {
                this.major = reponse;

            } else {
            }
        });
    }
    getLecExp() {

        this.lecPart1Service.getLecExp().subscribe((reponse: any) => {
            if (reponse) {
                this.lecExp = reponse;

            } else {
            }
        });
    }
    getLecPos() {

        this.lecPart1Service.getLecpos().subscribe((reponse: any) => {
            if (reponse) {
                this.lecPos = reponse;

            } else {
            }
        });
    }
    onSubmit() {
        if (this.lecForm.valid) {
            this._lecPart2Service.addlecform(this.lecForm.getRawValue());
            this.router.navigate(['/lecturerForm2']);
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
