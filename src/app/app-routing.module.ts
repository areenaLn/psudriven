import { LoginComponent } from './admin/login/login.component';
import { LecPart2Component } from './lec-part2/lec-part2.component';
import { Stdpart3Component } from './stdpart3/stdpart3.component';
import { LecFormComponent } from './lec-form/lec-form.component';
import { StdFormComponent } from './std-form/std-form.component';
import { MainAiComponent } from './main-ai/main-ai.component';





import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginMailComponent } from "./login-mail/login-mail.component";
import { Stdpart2Component } from './stdpart2/stdpart2.component';
import { Stdpart4Component } from './stdpart4/stdpart4.component';
import { LecPart3Component } from './lec-part3/lec-part3.component';
import { HomeComponent } from './admin/home/home.component';


const routes: Routes = [
    { path: "", component: MainAiComponent },
    { path: "studentForm", component: StdFormComponent },
    { path: "studentForm2", component: Stdpart2Component }, { path: "studentForm3", component: Stdpart3Component },
    { path: "studentForm4", component: Stdpart4Component },
    { path: "lecturerForm", component: LecFormComponent },
    { path: "lecturerForm2", component: LecPart2Component },
    { path: "lecturerForm3", component: LecPart3Component }, { path: "login", component: LoginComponent },
    { path: "home", component: HomeComponent }


];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule],
})
export class AppRoutingModule { }
