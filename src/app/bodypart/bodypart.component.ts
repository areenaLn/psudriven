import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bodypart',
    templateUrl: './bodypart.component.html',
    styleUrls: ['./bodypart.component.scss']
})
export class BodypartComponent implements OnInit {
    body = true;
    face = false;
    shoulder = false
    container: any;
    imageUrl = "./../../assets/img/body1.png"
 
    constructor() { }

    ngOnInit(): void {
    }
    chang(value: any) {
        if (value == 1) {
            this.imageUrl = "./../../assets/img/body1.png"
            this.body = true;
            this.face = false;
            this.shoulder = false;
        } else if (value == 2) {
            this.imageUrl = "./../../assets/img/face.png"
            this.face = true;
            this.body = false;
            this.shoulder = false
        }
        else if (value == 4) {
            this.imageUrl = "./../../assets/img/5.png"
            this.shoulder = true
            this.face = false;
            this.body = false;
        }
    }
     zoomIn(){
        var myImg = document.getElementById("container1") as HTMLSelectElement;
        var currWidth = myImg.clientWidth;
        console.log(currWidth);

     
     
            myImg.style.width = (currWidth + 100) + "px";
       
    }
     zoomOut(){
        var myImg = document.getElementById("container1") as HTMLSelectElement;
        var currWidth = myImg.clientWidth;
        console.log(currWidth);
		
            myImg.style.width = (currWidth - 100) + "px";
        
    }
    zoomImage() {
        var container = document.getElementById("container") as HTMLSelectElement;
        var img = document.getElementById("container1") as HTMLSelectElement;

        container.addEventListener("mousemove", (e: any) => {
            const x = e.clientX - e.target.offsetLeft;
            const y = e.clientY - e.target.offsetTop;
            console.log(x, y);

            img.style.transformOrigin = `${x}px ${y}px`;
            img.style.transform = "scale(2)";
        });
        container.addEventListener("mouseleave", () => {


            img.style.transformOrigin = "center";

            img.style.transform = "scale(1)";
        });
    }
  
}
