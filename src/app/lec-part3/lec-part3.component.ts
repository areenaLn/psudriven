import { LecPart2Service, LecTech, LecTechQ } from './../lec-part2/lec-part2.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-lec-part3',
    templateUrl: './lec-part3.component.html',
    styleUrls: ['./lec-part3.component.scss']
})
export class LecPart3Component implements OnInit {
    lecTech: LecTech[] = []; lecTechQ: LecTechQ[] = [];
    lecTechQ1: LecTechQ[] = [];

    lecTechQ2: LecTechQ[] = []; lecTechQ3: LecTechQ[] = []; lecTechQ4: LecTechQ[] = [];
    constructor(private lecPart2Service: LecPart2Service) { }

    ngOnInit(): void {
        this.getLecresource();
        this.getLectechq();
    }
    getLecresource() {
        this.lecPart2Service.getLectech().subscribe((reponse: any) => {
            if (reponse) {
                this.lecTech = reponse;

            } else {
            }
        });
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

}
