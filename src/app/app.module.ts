import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { BoardComponent } from './board/board.component';
import { Unit1Component } from './units/unit1/unit1.component';
import { Unit2Component } from './units/unit2/unit2.component';
import { Unit3Component } from './units/unit3/unit3.component';
import { Unit4Component } from './units/unit4/unit4.component';
import { Unit5Component } from './units/unit5/unit5.component';
import { Unit6Component } from './units/unit6/unit6.component';
import { Unit7Component } from './units/unit7/unit7.component';
import { Unit8Component } from './units/unit8/unit8.component';
import { Unit9Component } from './units/unit9/unit9.component';
import { LessonComponent } from './units/lesson/lesson.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    BoardComponent,
    Unit1Component,
    Unit2Component,
    Unit3Component,
    Unit4Component,
    Unit5Component,
    Unit6Component,
    Unit7Component,
    Unit8Component,
    Unit9Component,
    LessonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
