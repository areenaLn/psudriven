import { Stdpart3Service, StdSkill, SkillQ } from './stdpart3.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-stdpart3',
    templateUrl: './stdpart3.component.html',
    styleUrls: ['./stdpart3.component.scss']
})
export class Stdpart3Component implements OnInit {

    constructor(private stdPasrt3Service: Stdpart3Service) { }
    stdSkillType: StdSkill[] = [];
    stdSkillQ: SkillQ[] = []; stdSkillQ1: SkillQ[] = []; stdSkillQ2: SkillQ[] = []; stdSkillQ3: SkillQ[] = []; stdSkillQ4: SkillQ[] = []; stdSkillQ5: SkillQ[] = []; stdSkillQ6: SkillQ[] = [];
    ngOnInit(): void {
        this.getStdskilltype();
        this.getStdskillques();
    }
    getStdskilltype() {
        this.stdPasrt3Service.getStdskilltype().subscribe((reponse: any) => {
            if (reponse) {
                this.stdSkillType = reponse;

            } else {
            }
        });
    }
    getStdskillques() {
        this.stdPasrt3Service.getStdskillques().subscribe((reponse: any) => {
            if (reponse) {
                this.stdSkillQ = reponse;
                this.stdSkillQ1 = this.stdSkillQ.filter(
                    user => user.skillTypeId === "1");
                this.stdSkillQ2 = this.stdSkillQ.filter(
                    user => user.skillTypeId === "2");
                this.stdSkillQ3 = this.stdSkillQ.filter(
                    user => user.skillTypeId === "3"); this.stdSkillQ4 = this.stdSkillQ.filter(
                        user => user.skillTypeId === "4"); this.stdSkillQ5 = this.stdSkillQ.filter(
                            user => user.skillTypeId === "5"); this.stdSkillQ6 = this.stdSkillQ.filter(
                                user => user.skillTypeId === "6");
            } else {
            }
        });
    }
}
