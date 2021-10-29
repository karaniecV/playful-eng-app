import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { LessonComponent } from './units/unit/lesson/lesson.component';
import { LessonsListComponent } from './units/unit/lessons-list/lessons-list.component';
import { UnitComponent } from './units/unit/unit.component';
import { UnitsListComponent } from './units/units-list/units-list.component';
import { UnitsComponent } from './units/units.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'units', component: UnitsComponent,
    children: [
      { path: '', component: UnitsListComponent },
      { path: ':id', component: UnitComponent,
        children: [
          { path: '', component: LessonsListComponent },
          { path: 'lesson/:id', component: LessonComponent },
        ]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
