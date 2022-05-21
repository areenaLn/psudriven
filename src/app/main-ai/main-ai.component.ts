import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-ai',
  templateUrl: './main-ai.component.html',
  styleUrls: ['./main-ai.component.scss']
})
export class MainAiComponent implements OnInit {
    public isCollapsed = true;
    focus: any;
    focus1: any;
  constructor() { }

  ngOnInit(): void {
  }

}
