import { environment } from 'src/environments/environment';

import { LoginService, Webdata } from './login.service';
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {

    FormBuilder,
    FormGroup,

    Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/@common/services/auth.service";
import Swal from 'sweetalert2';



@Component({
    selector: "app-login-mail",
    templateUrl: "./login-mail.component.html",
    styleUrls: ["./login-mail.component.scss"],
})
export class LoginMailComponent implements OnInit {
    public isCollapsed = true;
    profileId: any;
    loginForm: FormGroup;
    submitted = false;
    password = "";
    show = false;
    tokenLogin: string = "";
    priceId: number = 0;
    checkToken: any = "";
    token: any;
    token1: Webdata = {
        token: "",
        username: '',

    };
    constructor(
        private authService: AuthService,
        private formBuilder: FormBuilder,
        private router: Router,
        private routers: ActivatedRoute,
        private loginService: LoginService,

    ) {
        this.loginForm = this.formBuilder.group({
            username: ["", [Validators.required]],
            password: ["", [Validators.required]],
        });
    }

    ngOnInit(): void {
        this.password = "password";

    }

    passwordCheck() {
        if (this.password === "password") {
            this.password = "text";
            this.show = true;
        } else {
            this.password = "password";
            this.show = false;
        }
    }
    get sf() {
        return this.loginForm.controls;
    }

    onLogin() {
        this.submitted = true;


        if (this.loginForm.valid) {
            this.loginService
                .auth(this.loginForm.getRawValue())

                .subscribe(
                    (res: any) => {

                        if (res.access_token) {
                            this.token = res.access_token; const token = res.access_token;
                            const username = this.loginForm.getRawValue().username;
                            this.tokenLogin = token;
                            localStorage.setItem(
                                environment.AUTH_TOKEN_NAME,
                                token);
                                localStorage.setItem(
                                    environment.AUTH_TOKEN_USER,
                                    username);
                            this.token1 = {
                                token: this.token,
                                username: this.loginForm.getRawValue().username
                            }
                            this.loginService.addWebData(this.token1);

                            this.loginService.getOTP(this.loginForm.getRawValue(), this.token).subscribe((response: any) => {

                            });


                            Swal.fire({
                                buttonsStyling: false,
                                customClass: {
                                    confirmButton: 'btn btn-success' //insert class here
                                },
                                showConfirmButton: false,
                                timer: 2000,
                                timerProgressBar: true,
                                icon: "success",
                                title: "Login Success.",
                            }).then((sw) => {

                                this.router.navigate(["verification"]);
                            })
                        }
                    },

                    (err) => {
                        Swal.fire({
                            buttonsStyling: false,
                            customClass: {
                                confirmButton: 'btn btn-success' //insert class here
                            },
                            timerProgressBar: true,
                            icon: "error",
                            title: "ชื่อผู้ใช้ หรือ รหัสผ่าน ไม่ถูกต้อง",
                        });
                    }
                );
        }
    }
}
