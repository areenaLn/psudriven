
import { RouterModule } from "@angular/router";
import {
    CUSTOM_ELEMENTS_SCHEMA,
    NgModule,
    NO_ERRORS_SCHEMA,
} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { TooltipModule } from "ngx-bootstrap/tooltip";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { LoginMailComponent } from "./login-mail/login-mail.component";
import { SharedModule } from "src/@common/shared.module";
import { AuthInterceptor } from "src/@common/guards/auth.interceptor";
import { NgWizardModule, NgWizardConfig, THEME } from "ng-wizard";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TabsModule } from "ngx-bootstrap/tabs";
import { Ng2SearchPipeModule } from "ng2-search-filter";

import { BodypartComponent } from './bodypart/bodypart.component';
import { FooterComponent } from './footer/footer.component';
import { MainAiComponent } from './main-ai/main-ai.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StdFormComponent } from './std-form/std-form.component';
import { Stdpart1Component } from './stdpart1/stdpart1.component';
import { Stdpart2Component } from './stdpart2/stdpart2.component';
import { TheoryComponent } from './theory/theory.component';
import { LecFormComponent } from './lec-form/lec-form.component';
import { LecPart1Component } from './lec-part1/lec-part1.component';
import { Stdpart3Component } from './stdpart3/stdpart3.component';
import { Stdpart4Component } from './stdpart4/stdpart4.component';
import { LecPart2Component } from './lec-part2/lec-part2.component';
import { LecPart3Component } from './lec-part3/lec-part3.component';
import { LoginComponent } from './admin/login/login.component';
import { HomeComponent } from './admin/home/home.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { EduDataMenuComponent } from './admin/edu-data-menu/edu-data-menu.component';
import { EduFormComponent } from './admin/edu-form/edu-form.component';
import { LearningStyleComponent } from './learning-style/learning-style.component';
import { ToolLearnningComponent } from './tool-learnning/tool-learnning.component';
import { LearningDetailComponent } from './learning-style/learning-detail/learning-detail.component';
import { AngularEditorModule } from "@kolkov/angular-editor";
import { EditStdFormComponent } from './admin/edit-std-form/edit-std-form.component';
import { EditLecFormComponent } from './admin/edit-lec-form/edit-lec-form.component';
import { DashboardStdComponent } from './dashboard-std/dashboard-std.component';
import { ChartLearnStyleComponent } from './chart-learn-style/chart-learn-style.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { ChartStdLevelComponent } from './chart-std-level/chart-std-level.component';
import { ChartOjbComponent } from './chart-ojb/chart-ojb.component';
import { ChartStdMediaComponent } from './chart-std-media/chart-std-media.component';





const ngWizardConfig: NgWizardConfig = {
    theme: THEME.default,
};
@NgModule({
    declarations: [
        AppComponent,
        LoginMailComponent,

        BodypartComponent,
        FooterComponent,
        MainAiComponent,
        NavbarComponent,
        StdFormComponent,
        Stdpart1Component,
        Stdpart2Component,
        TheoryComponent,
        LecFormComponent,
        LecPart1Component,
        Stdpart3Component,
        Stdpart4Component,
        LecPart2Component,
        LecPart3Component,
        LoginComponent,
        HomeComponent,
        SidebarComponent,
        EduDataMenuComponent,
        EduFormComponent,
        LearningStyleComponent,
        ToolLearnningComponent,
        LearningDetailComponent,
        EditStdFormComponent,
        EditLecFormComponent,
        DashboardStdComponent,
        ChartLearnStyleComponent,
        ChartStdLevelComponent,
        ChartOjbComponent,
        ChartStdMediaComponent,
       


    ],

    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule,
        AppRoutingModule,
        SharedModule,
        NgWizardModule.forRoot(ngWizardConfig),
        TooltipModule.forRoot(),
        BrowserAnimationsModule,
        TabsModule.forRoot(),
        Ng2SearchPipeModule,
        AppRoutingModule,
        AngularEditorModule,
        NgApexchartsModule,
       
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
