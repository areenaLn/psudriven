import { Component, OnInit } from '@angular/core';
import { EduDataMenuService, TypeEdu } from './edu-data-menu.service';

@Component({
  selector: 'app-edu-data-menu',
  templateUrl: './edu-data-menu.component.html',
  styleUrls: ['./edu-data-menu.component.scss']
})
export class EduDataMenuComponent implements OnInit {
typeEdu:TypeEdu[]=[];
  constructor(private eduDataMenuService:EduDataMenuService) { }

  ngOnInit(): void {
    this.getlecEdu();
  }
  getlecEdu() {

    this.eduDataMenuService.gettype().subscribe((reponse: any) => {
        if (reponse) {
            this.typeEdu = reponse;
            //console.log('type'+this.typeEdu[0].type_name)

        } else {
        }
    });
}
addTypeName(name:any){
  this.eduDataMenuService.addTypename(name);
  console.log("date type:" +  this.eduDataMenuService.addTypename(name))
}
}
