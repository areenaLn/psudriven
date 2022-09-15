import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { EduDataMenuService } from '../edu-data-menu/edu-data-menu.service';
import Swal from 'sweetalert2';
import { EduFormService } from './edu-form.service';
@Component({
  selector: 'app-edu-form',
  templateUrl: './edu-form.component.html',
  styleUrls: ['./edu-form.component.scss']
})
export class EduFormComponent implements OnInit {

  constructor(private eduDataMenuService: EduDataMenuService, private eduFormService: EduFormService) { }

  ngOnInit(): void {
    this.getTypeName();
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
    this.addPost(topic, title);
  }
  addPost(topic: any, title: any) {
    let formData:any = new FormData();
    // formData.append('file', file, file.name);
    formData.append('typeId',this.typenameId);
    formData.append('topic',topic)
    formData.append('content',this.htmlContent)
    formData.append('isAdd','true')
    formData.append('image',this.image64)
    formData.append('title',title)

    this.eduFormService.addPost(formData).subscribe((reponse: any) => {
      if (reponse) {

        Swal.fire({
          buttonsStyling: false,
          customClass: {
            confirmButton: 'btn btn-success' //insert class here
          },
          timerProgressBar: true,
          icon: "success",
          title: "สำเร็จ",
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
          title: "สำเร็จ",
        });

      }
    }

    )
  }

}
