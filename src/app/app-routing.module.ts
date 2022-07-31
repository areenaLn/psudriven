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
import { EduDataMenuComponent } from './admin/edu-data-menu/edu-data-menu.component';
import { EduFormComponent } from './admin/edu-form/edu-form.component';
import { TheoryComponent } from './theory/theory.component';
import { LearningStyleComponent } from './learning-style/learning-style.component';
import { ToolLearnningComponent } from './tool-learnning/tool-learnning.component';
import { LearningDetailComponent } from './learning-detail/learning-detail.component';
import { DashboardStdComponent } from './dashboard-std/dashboard-std.component';
import { PostDataMainComponent } from './admin/post-data-main/post-data-main.component';
import { PostEditComponent } from './admin/post-edit/post-edit.component';


const routes: Routes = [
  { path: "", component: MainAiComponent },
   { path: "post-main", component: PostDataMainComponent },
   { path: "post-edit", component: PostEditComponent },
    { path: "studentForm", component: StdFormComponent },
    { path: "studentForm2", component: Stdpart2Component }, { path: "studentForm3", component: Stdpart3Component },
    { path: "studentForm4", component: Stdpart4Component },
    { path: "lecturerForm", component: LecFormComponent },
    { path: "lecturerForm2", component: LecPart2Component },
    { path: "lecturerForm3", component: LecPart3Component }, { path: "login", component: LoginComponent },
    { path: "home", component: HomeComponent },  { path: "theory", component: TheoryComponent },
    { path: "education", component: EduDataMenuComponent },
    { path: "edu-form", component: EduFormComponent },  { path: "learning-style", component: LearningStyleComponent },
    { path: "tool-learning", component: ToolLearnningComponent },
    { path: "detail", component: LearningDetailComponent }, { path: "stdDashboard", component: DashboardStdComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule],
})
export class AppRoutingModule { }
