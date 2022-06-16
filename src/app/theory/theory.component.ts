import { Component, OnInit } from '@angular/core';
import { Learning, LearningStyleService } from '../learning-style/learning-style.service';

@Component({
  selector: 'app-theory',
  templateUrl: './theory.component.html',
  styleUrls: ['./theory.component.scss']
})
export class TheoryComponent implements OnInit {
  learningStyle1:Learning[]=[];learningStyle11:Learning[]=[];
  constructor(private learningStyleService:LearningStyleService) { }

  ngOnInit(): void {this. getPosData();
  }
  getPosData() {

    this.learningStyleService.getAlldatapos().subscribe((reponse: any) => {
        if (reponse) {
            this.learningStyle1 = reponse;
            this.learningStyle11 = this.learningStyle1.filter(
              user => user.typeId == 1);


        } else {
        }
    });
}addDetail(detail:Learning){
  this.learningStyleService.addDetail(detail);
  // console.log('data :'+detail.title);
  
  }
}
