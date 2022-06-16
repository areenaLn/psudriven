import { Component, OnInit } from '@angular/core';
import { Learning, LearningStyleService } from '../learning-style/learning-style.service';

@Component({
  selector: 'app-tool-learnning',
  templateUrl: './tool-learnning.component.html',
  styleUrls: ['./tool-learnning.component.scss']
})
export class ToolLearnningComponent implements OnInit {
  learningStyle1:Learning[]=[];learningStyle11:Learning[]=[];
  constructor(private learningStyleService:LearningStyleService) { }

  ngOnInit(): void {this. getPosData();
  }
  getPosData() {

    this.learningStyleService.getAlldatapos().subscribe((reponse: any) => {
        if (reponse) {
            this.learningStyle1 = reponse;
            this.learningStyle11 = this.learningStyle1.filter(
              user => user.typeId == 3);


        } else {
        }
    });
}addDetail(detail:Learning){
  this.learningStyleService.addDetail(detail);
  // console.log('data :'+detail.title);
  
  }
}
