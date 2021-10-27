import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { LessonComponent } from './units/lesson/lesson.component';
import { UnitsComponent } from './units/units.component';
import { UnitComponent } from './units/unit/unit.component';
import { UnitsListComponent } from './units/units-list/units-list.component';
import { SafePipe } from './units/lesson/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    LessonComponent,
    UnitsComponent,
    UnitComponent,
    UnitsListComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
