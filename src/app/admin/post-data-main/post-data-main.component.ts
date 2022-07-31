import { Component, OnInit } from '@angular/core';
import { Learning, LearningStyleService } from 'src/app/learning-style/learning-style.service';
import { EduDataMenuService } from '../edu-data-menu/edu-data-menu.service';
import { DomSanitizer } from '@angular/platform-browser';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-post-data-main',
  templateUrl: './post-data-main.component.html',
  styleUrls: ['./post-data-main.component.scss']
})
export class PostDataMainComponent implements OnInit {
  general = true;
  educate = false;
  theory = false;
  imagePath :any;
  learningStyle1:Learning[]=[];learningStyle11:Learning[]=[];
  learning:Learning[]=[];learning1:Learning[]=[];  tool:Learning[]=[];tool1:Learning[]=[];
  constructor(private learningStyleService:LearningStyleService ,
    private eduDataMenuService:EduDataMenuService,
    private _sanitizer: DomSanitizer,
    private _adminService:AdminService) { }

  ngOnInit(): void {
    this.addindex();
    this.getPosData();
  }
  select_catagory(number: number) {
    if (number == 1) {
      this.general = true;
      this.educate = false;  this.theory = false;  
    } else if (number == 2) {
      this.general = false;
      this.educate = true;  this.theory = false;  
   
    }
    else if (number == 3) {
      this.general = false;
      this.educate = false;  this.theory = true;
   
    }
    else if (number == 4) {
      this.general = false;
      this.educate = false;  this.theory = false; 
    }

  }
  getPosData() {

    this.learningStyleService.getAlldatapos().subscribe((reponse: any) => {
        if (reponse) {
            this.learningStyle1 = reponse;
            this.learningStyle11 = this.learningStyle1.filter(
              user => user.typeId == 1);

              this.learning = this.learningStyle1.filter(
                user => user.typeId == 2); 
                this.tool = this.learningStyle1.filter(
                  user => user.typeId == 3);
                  this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
                 + this.learningStyle1[0].image);


        } else {
        }
    });
}
addTypeName(name:any){
  this.eduDataMenuService.addTypename(name);
  console.log("date type:" +  this.eduDataMenuService.addTypename(name))
}
addDetail(detail:Learning){
  this.learningStyleService.addDetail(detail);

  
  }
  addindex() {

    this._adminService.addData(1);
}

}
