import { Component, OnInit } from '@angular/core';
import { EduDataMenuService } from '../edu-data-menu/edu-data-menu.service';
import { EduFormService } from '../edu-form/edu-form.service';
import Swal from 'sweetalert2';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Learning, LearningStyleService } from 'src/app/learning-style/learning-style.service';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {
  detail: any;
  title: any;
  topic: any;
  id: any;
  imagePath:any;
  constructor(private eduDataMenuService: EduDataMenuService, private eduFormService: EduFormService, private learningStyleService: LearningStyleService, private router: Router,private adminService:AdminService,
    private _sanitizer: DomSanitizer) { }
  ngOnInit(): void {
    this.getTypeName();
    this.getDetail();
  }
  file: any;
  name = 'Angular 6'; image64: any;
  htmlContent = '';
  typenameId = 1;
  typeName = "ทฤษฎีการเรียนรู้";
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'yes',
    defaultParagraphSeparator: 'p',

    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
    ],

    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText',
        tag: "bold"
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
  getTypeName() {
    this.eduDataMenuService.getTypename();
    if (this.eduDataMenuService.getTypename()) {
      this.typenameId = this.eduDataMenuService.getTypename();
      if (this.typenameId == 1) {
        this.typeName = "ทฤษฎีการเรียนรู้";
      } else if (this.typenameId == 2) {
        this.typeName = "รูปแบบการเรียนรู้";
      } else {
        this.typeName = "เครื่องมือสำหรับการเรียนรู้";
      }

    } else {
    }

  }
  getFiledetials(element: any) {
    this.file = document.querySelector('input[type="file"]');
    console.log('file :' + this.file)
    const file = this.file.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
      this.image64 = reader.result;
    };
    // const reader = new FileReader();
    // reader.readAsDataURL(this.file);
    // reader.onload = () => {
    //     console.log(reader.result);
    // };
  }
  getData() {
    console.log('========');
    var topic = (document.getElementById("topic") as HTMLSelectElement)
      .value;
    var title = (document.getElementById("title") as HTMLSelectElement)
      .value;
    console.log('datac:' + topic, title, this.htmlContent, this.image64);

  }
  getDataDelete() {
    console.log('========');
   this.topic = (document.getElementById("topic") as HTMLSelectElement)
      .value;
   this.title = (document.getElementById("title") as HTMLSelectElement)
      .value;
    // console.log('datac:' + topic, title, this.htmlContent, this.image64);
  this.updatePosData();

  }

  getDetail() {
    this.detail = this.learningStyleService.getDetail().content;
    this.title = this.learningStyleService.getDetail().title;
    this.topic = this.learningStyleService.getDetail().topic;
    this.id = this.learningStyleService.getDetail().id;
    this.image64 =this.learningStyleService.getDetail().image;
    this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
                 + this.image64.base64string);
    this.htmlContent = this.detail;
    console.log('Yhs is ID :' + this.id);
   
  }
  deletePosData() {
    this.learningStyleService.deletePost(this.id).subscribe((reponse: any) => {
      if (reponse) {

        Swal.fire({
          buttonsStyling: false,
          customClass: {
            confirmButton: 'btn btn-success' //insert class here
          },
          timerProgressBar: true,
          icon: "success",
          title: "ลบข้อมูลสำเร็จ",
        }).then((sw) => {
          this.router.navigate(["/post-main"]);
        });
      }
    }, error => {
      if (error.status == 200) {
        Swal.fire({
          buttonsStyling: false,
          customClass: {
            confirmButton: 'btn btn-success' //insert class here
          },
          timerProgressBar: true,
          icon: "success",
          title: "ลบข้อมูลสำเร็จ",
        }).then((sw) => {
          this.router.navigate(["/post-main"]);
        });


      }
    }

    )
  }
  updatePosData() {
    this.adminService.editPostData(this.id,this.topic,this.htmlContent,this.title,this.image64).subscribe((reponse: any) => {
      if (reponse) {

        Swal.fire({
          buttonsStyling: false,
          customClass: {
            confirmButton: 'btn btn-success' //insert class here
          },
          timerProgressBar: true,
          icon: "success",
          title: "แก้ไขข้อมูลสำเร็จ",
        }).then((sw) => {
          this.router.navigate(["/post-main"]);
        });
      }
    }, error => {
      if (error.status == 200) {
        Swal.fire({
          buttonsStyling: false,
          customClass: {
            confirmButton: 'btn btn-success' //insert class here
          },
          timerProgressBar: true,
          icon: "success",
          title: "แก้ไขข้อมูลสำเร็จ",
        }).then((sw) => {
          this.router.navigate(["/post-main"]);
        });


      }
    }

    )
  }

}
