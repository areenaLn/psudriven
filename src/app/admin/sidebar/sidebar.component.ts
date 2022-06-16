import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidbarService } from '../sidbar.service';
import { RouteInfo } from './sidbarmedaData';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public isCollapsed = true;
  public sidebarnavItems: RouteInfo[] = [];
  public Highligh: any;
  constructor(private menuServise: SidbarService, private router: Router) {
      this.menuServise.items.subscribe((menuItems) => {
          this.sidebarnavItems = menuItems;
      });
  }

  ngOnInit(): void {
      // // this.Highligh = 0;
      // this.loadIndex();
  }
  hight(index: any) {
     
  }
  // loadIndex() {

  //    this.Highligh =this.menuServise.getData();
  // }

}
