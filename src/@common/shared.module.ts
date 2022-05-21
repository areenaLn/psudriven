import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthService } from "./services/auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
      providers: [AuthService],
      declarations: [],
      imports: [CommonModule, FormsModule, BrowserModule,ReactiveFormsModule],
      exports: [CommonModule, FormsModule, BrowserModule, ReactiveFormsModule],
})
export class SharedModule {}
