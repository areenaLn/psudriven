import { LecPart1Service, LecPos, LecExp } from './lec-part1.service';
import { Stdpart1Service, Major, Religion } from './../stdpart1/stdpart1.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-lec-part1',
    templateUrl: './lec-part1.component.html',
    styleUrls: ['./lec-part1.component.scss']
})
export class LecPart1Component implements OnInit {
    valueSelect!: string;
    campus: Major[] = [];
    major: Major[] = []; lecPos: LecPos[] = [];
    religion: Religion[] = [];
    lecExp:LecExp[]=[];
    constructor(private stdService: Stdpart1Service, private lecPart1Service: LecPart1Service) { }

    ngOnInit(): void {
        this.getCam();
        this.getReligion();
        this.getMajor();
        this.getLecPos();
        this.getLecExp();
    }
    selectOrganization() {
        var e = (document.getElementById("mySelect") as HTMLSelectElement)
            .value;
        this.valueSelect = e;
    }
    getCam() {

        this.stdService.getRedeemRe().subscribe((reponse: any) => {
            if (reponse) {
                this.campus = reponse;
                console.log('response :' + this.campus);
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
