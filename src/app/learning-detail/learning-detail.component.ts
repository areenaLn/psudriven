import { Component, OnInit } from '@angular/core';
import { LearningStyleService } from '../learning-style/learning-style.service';

@Component({
  selector: 'app-learning-detail',
  templateUrl: './learning-detail.component.html',
  styleUrls: ['./learning-detail.component.scss']
})
export class LearningDetailComponent implements OnInit {
detail:any;
  constructor(private learningStyleService:LearningStyleService) { }

  ngOnInit(): void {this.getDetail();
  }
  getDetail(){
  this.detail =  this.learningStyleService.getDetail().content;
 
  }
  coverHtml(str:any){
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    
    return doc.body;
  }
  

}
