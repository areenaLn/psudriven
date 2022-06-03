
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
import { ImageDrawingModule } from 'ngx-image-drawing';
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
        ImageDrawingModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
