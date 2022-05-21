import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stdpart1',
  templateUrl: './stdpart1.component.html',
  styleUrls: ['./stdpart1.component.scss']
})
export class Stdpart1Component implements OnInit {
    valueSelect!: string;
  constructor() { }

  ngOnInit(): void {
  }
  selectOrganization() {
    var e = (document.getElementById("mySelect") as HTMLSelectElement)
        .value;
    this.valueSelect = e;
}

}
