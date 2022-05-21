import { LecFormComponent } from './lec-form/lec-form.component';
import { StdFormComponent } from './std-form/std-form.component';
import { MainAiComponent } from './main-ai/main-ai.component';





import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginMailComponent } from "./login-mail/login-mail.component";
import { Stdpart2Component } from './stdpart2/stdpart2.component';


const routes: Routes = [
    { path: "", component: MainAiComponent },
    { path: "studentForm", component: StdFormComponent },
    { path: "studentForm2", component: Stdpart2Component },
    { path: "lecturerForm", component: LecFormComponent },
   
  
   
   
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
