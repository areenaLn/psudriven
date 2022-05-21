import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lec-part1',
  templateUrl: './lec-part1.component.html',
  styleUrls: ['./lec-part1.component.scss']
})
export class LecPart1Component implements OnInit {
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
