import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
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
  constructor(private menuServise: SidbarService, private router: Router,
    private _adminService:AdminService) {
      this.menuServise.items.subscribe((menuItems) => {
          this.sidebarnavItems = menuItems;
      });
  }

  ngOnInit(): void {
this.  loadIndex();
      // this.loadIndex();
  }
  hight(index: any) {
     
  }
  loadIndex() {

    this.Highligh = this._adminService.getData();
  }

  
  // loadIndex() {

  //    this.Highligh =this.menuServise.getData();
  // }

}
