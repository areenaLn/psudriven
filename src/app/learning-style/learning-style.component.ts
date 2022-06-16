import { Component, OnInit } from '@angular/core';
import { Learning, LearningStyleService } from './learning-style.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-learning-style',
  templateUrl: './learning-style.component.html',
  styleUrls: ['./learning-style.component.scss']
})
export class LearningStyleComponent implements OnInit {
  learningStyle1:Learning[]=[];learningStyle11:Learning[]=[];imagePath:any;
learningStyle:Learning[]=[
{
  typeId: 1,
  topic: 'Title 04',
  title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  content: 'string',
  image: 'https://cdn.pixabay.com/photo/2018/03/30/15/12/dog-3275593_960_720.jpg',
},{
  typeId: 1,
  topic: 'Title 04',
  title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  content: 'string',
  image: 'https://cdn.pixabay.com/photo/2018/03/30/15/12/dog-3275593_960_720.jpg',
},{
  typeId: 1,
  topic: 'Title 04',
  title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  content: 'string',
  image: 'https://cdn.pixabay.com/photo/2018/03/30/15/12/dog-3275593_960_720.jpg',
},{
  typeId: 1,
  topic: 'Title 04',
  title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  content: 'string',
  image: 'https://cdn.pixabay.com/photo/2018/03/30/15/12/dog-3275593_960_720.jpg',
},{
  typeId: 1,
  topic: 'Title 04',
  title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  content: 'string',
  image: 'https://cdn.pixabay.com/photo/2018/03/30/15/12/dog-3275593_960_720.jpg',
},{
  typeId: 1,
  topic: 'Title 04',
  title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  content: 'string',
  image: 'https://cdn.pixabay.com/photo/2018/03/30/15/12/dog-3275593_960_720.jpg',
}

]
  constructor(private learningStyleService:LearningStyleService,private _sanitizer:DomSanitizer) { }

  ngOnInit(): void {this.getPosData();
  }
  getPosData() {

    this.learningStyleService.getAlldatapos().subscribe((reponse: any) => {
        if (reponse) {
            this.learningStyle1 = reponse;
            this.learningStyle11 = this.learningStyle1.filter(
              user => user.typeId == 2);


        } else {
        }
    });
}
addDetail(detail:Learning){
this.learningStyleService.addDetail(detail);
// console.log('data :'+detail.title);

}
convertImage(image:any

){
  this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl(`data:image/jpg;base64,${image}`
);
  console.log('image bbb:' +this.imagePath)
return this.imagePath;
}
}
