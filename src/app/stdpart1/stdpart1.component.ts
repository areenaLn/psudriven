import { Stdpart1Service, Major, Religion, StdLevel, StdGpa, stdReson } from './stdpart1.service';
import {Stdpart2Service} from './../stdpart2/stdpart2.service'
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
    selector: 'app-stdpart1',
    templateUrl: './stdpart1.component.html',
    styleUrls: ['./stdpart1.component.scss']
})
export class Stdpart1Component implements OnInit {
    level!: string; majorname: any;
    campus: Major[] = []; age: any; nation: any; expert1: any; expert2: any; expert3: any;
    religion: Religion[] = []; gpa: any;
    stdLevel: StdLevel[] = [];
    selectedObj: any[] = [];
    major: Major[] = []; sex: any; campus1: any;
    stdGpa: StdGpa[] = []; reson: any;
    stdreson: stdReson[] = []; reli: any;
    stdForm: FormGroup;
    sexlist: any = [{
        id: 1,
        name: "ชาย"
    }, {
        id: 2,
        name: "หญิง"
    }]
    constructor(private stdService: Stdpart1Service,
        private fb: FormBuilder,
        private Stdpart2Service:Stdpart2Service,
        private router: Router,
        ) {
        this.stdForm = this.fb.group({
            sex: ["",[Validators.required]],
            age: ["",[Validators.required]],
            religion: ["",[Validators.required]],
            nation: ["",[Validators.required]],
            stdLevel: ["",[Validators.required]],
            campus1: ["",[Validators.required]],
            majorname: ["",[Validators.required]],
            gpaStd: ["",[Validators.required]],
            reson: ["",[Validators.required]],
            expert1: ["",[Validators.required]],
            expert2: ["",[Validators.required]],
            expert3: ["",[Validators.required]],
        });
    }

    ngOnInit(): void {
        this.getCam();
        this.getReligion();
        this.getStdLevel();
        this.getMajor();
        this.getStdGpa(); this.getStdResoucse();
    }
    checkedObj(item: any) {
        if (this.selectedObj.indexOf(item) != -1) {
            return;


        }
    }
    onChangeObj(checked: any, item: any) {
        if (checked.checked) {
            this.selectedObj = [];
            this.selectedObj.push(item.name);
            console.log('selected :' + this.selectedObj)
        } else {
            this.selectedObj.splice(this.selectedObj.indexOf(item), 1)
            console.log('selected :' + this.selectedObj)
        }
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
        this.stdForm.patchValue({
            sex: this.selectedObj,
            age: this.age,
            religion: this.reli,
            nation: this.nation,
            stdLevel: this.level,
            campus1: this.campus1,
            majorname: this.majorname,
            gpaStd: this.gpa,
            reson: this.reson,
            expert1: this.expert1,
            expert2: this.expert2,
            expert3: this.expert3,
        });
        if (this.stdForm.valid) {
            this.Stdpart2Service.addstdPart1(this.stdForm.getRawValue());
            if (this.Stdpart2Service.addstdPart1(this.stdForm.getRawValue())) {
                this.router.navigate(['/studentForm2']);
            }
        }else{
            Swal.fire({
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                icon: 'error',
                title: 'กรุณากรอกข้อมูลให้ครบถ้วน',
              })
        }
        // console.log('data :'+this.stdForm.getRawValue())
    }
    selectOrganization() {
        var stdLevel = (document.getElementById("stdLevel") as HTMLSelectElement)
            .value;
        var religions = (document.getElementById("religion") as HTMLSelectElement)
            .value;
        var campus1 = (document.getElementById("campus1") as HTMLSelectElement)
            .value;
        var major = (document.getElementById("majorname") as HTMLSelectElement)
            .value;
        var gpaStd = (document.getElementById("gpaStd") as HTMLSelectElement)
            .value;
        var res = (document.getElementById("reson") as HTMLSelectElement)
            .value;
        this.reson = res;
        this.gpa = gpaStd;
        this.reli = religions;
        this.campus1 = campus1;
        this.level = stdLevel;
        this.majorname = major;

    }
    getCam() {

        this.stdService.getRedeemRe().subscribe((reponse: any) => {
            if (reponse) {
                this.campus = reponse;
            } else {
                this.campus = [];
            }
        });
    }
    getStdGpa
        () {

        this.stdService.getStdGpa
            ().subscribe((reponse: any) => {
                if (reponse) {
                    this.stdGpa = reponse;

                } else {
                    this.stdGpa = [];
                }
            });
    }
    getReligion() {

        this.stdService.getRelogion().subscribe((reponse: any) => {
            if (reponse) {
                this.religion = reponse;

            } else {
                this.religion = [];
            }
        });
    }
    getStdLevel() {

        this.stdService.getStdLevel().subscribe((reponse: any) => {
            if (reponse) {
                this.stdLevel = reponse;

            } else {
                this.stdLevel = [];
            }
        });
    }
    getMajor() {

        this.stdService.getmajor().subscribe((reponse: any) => {
            if (reponse) {
                this.major = reponse;

            } else {
                this.major = [];
            }
        });
    }
    getStdResoucse() {

        this.stdService.getStdResoucse().subscribe((reponse: any) => {
            if (reponse) {
                this.stdreson = reponse;

            } else {
            }
        });
    }

}
