import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CardModule, ObjectStatusModule, TableModule, ThemingModule} from "@fundamental-ngx/core";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    BrowserAnimationsModule,
    ThemingModule,
    CardModule,
    TableModule,
    ObjectStatusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
