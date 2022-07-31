import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _adminService:AdminService) { }

  ngOnInit(): void {
    this.addindex();
  }
  addindex() {

    this._adminService.addData(0);
}
}
