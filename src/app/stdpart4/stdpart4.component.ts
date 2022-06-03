import { Stdpart4Service, PersonTest } from './stdpart4.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stdpart4',
  templateUrl: './stdpart4.component.html',
  styleUrls: ['./stdpart4.component.scss']
})
export class Stdpart4Component implements OnInit {
personTest:PersonTest[]=[];
  constructor(private stdPasrt4Service:Stdpart4Service) { }

  ngOnInit(): void {this.getStdtechniqstd();
  }
  getStdtechniqstd() {
    this.stdPasrt4Service.getstdPersontest().subscribe((reponse: any) => {
        if (reponse) {
            this.personTest = reponse;

        } else {
        }
    });
}
}
