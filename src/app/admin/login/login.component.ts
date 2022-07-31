import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    show = false;
    password = '';
    submitted = false;
    loginForm: FormGroup;
    tokenLogin: string = '';
    headerService: string = '';
    constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private adminService:AdminService
    
    ) {
      this.loginForm = this.formBuilder.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
      });
    }
  
    ngOnInit(): void {
      this.password = 'password';
    }
    onLogin() {
      this.submitted = true;
      if (this.loginForm.valid) {
        this.adminService.getLogin(this.loginForm.getRawValue().username,this.loginForm.getRawValue().password).subscribe((reponse: any) => {
          if (reponse != null) {
    console.log("res:"+reponse)
            Swal.fire({
              buttonsStyling: false,
              customClass: {
                confirmButton: 'btn btn-success' //insert class here
              },
              showConfirmButton:false,
              timer: 2000,
              timerProgressBar: true,
              icon: "success",
              title: "เข้าสู่ระบบสำเร็จ",
            }).then((sw) => {
              this.router.navigate(["/home"]);
            });
          }else{
            Swal.fire({
              buttonsStyling: false,
              customClass: {
                confirmButton: 'btn btn-success' //insert class here
              },
              timerProgressBar: true,
              icon: "error",
              title: "ชื่อผู้ใช้ หรือรหัสผ่านไม่ถูกต้อง",
            })
          }
        }, error => {
          if (error.status == 200) {
            Swal.fire({
              buttonsStyling: false,
              customClass: {
                confirmButton: 'btn btn-success' //insert class here
              },
              showConfirmButton:false,
              timer: 2000,
              timerProgressBar: true,
              icon: "success",
              title: "เข้าสู่ระบบสำเร็จ",
            }).then((sw) => {
              this.router.navigate(["/home"]);
            });
    
    
          }
        }
    
        )
      //  this.router.navigate(['/home']);
      }
    }
 
    passwordCheck() {
      if (this.password === 'password') {
        this.password = 'text';
        this.show = true;
      } else {
        this.password = 'password';
        this.show = false;
      }
    }
    get sf() {
      return this.loginForm.controls;
    }
}
