import { LecPart1Service, LecPos, LecExp, LecEdu } from './lec-part1.service';
import { Stdpart1Service, Major, Religion } from './../stdpart1/stdpart1.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-lec-part1',
    templateUrl: './lec-part1.component.html',
    styleUrls: ['./lec-part1.component.scss']
})
export class LecPart1Component implements OnInit {
    valueSelect!: string; lecEdu: LecEdu[] = [];sex:any;
    campus: Major[] = []; nation: any; expert1: any;
    major: Major[] = []; lecPos: LecPos[] = [];
    religion: Religion[] = []; age: any; expert2: any; expert3: any;
    lecExp: LecExp[] = []; campus1: any; major1: any; position: any; experient: any;
    lecLevel: any; religions: any;
    constructor(private stdService: Stdpart1Service, private lecPart1Service: LecPart1Service) { }

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



        console.log('Age :' + this.age, this.nation, this.expert1, this.expert2, this.expert3,this.sex);


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
}
