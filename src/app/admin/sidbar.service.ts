import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ROUTES } from './sidebar/sidbar-item';
import { RouteInfo } from './sidebar/sidbarmedaData';

@Injectable({
  providedIn: 'root'
})
export class SidbarService {

  MENUITEMS: RouteInfo[] = ROUTES;
  sidebarIndex = 0; dataChange: BehaviorSubject<any>;
 roleChange: BehaviorSubject<any>;
  items = new BehaviorSubject<RouteInfo[]>(this.MENUITEMS);
  url: string;
  constructor(private httpClient: HttpClient) {
      this.dataChange = new BehaviorSubject(null);
      this.roleChange = new BehaviorSubject(null);
      this.url = environment.URL_API;
  }

}
