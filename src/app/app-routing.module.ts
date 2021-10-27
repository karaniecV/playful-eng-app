import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { LessonComponent } from './units/lesson/lesson.component';
import { UnitComponent } from './units/unit/unit.component';
import { UnitsListComponent } from './units/units-list/units-list.component';
import { UnitsComponent } from './units/units.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  {
    path: 'units', component: UnitsComponent,
    children: [
      { path: '', component: UnitsListComponent },
      {
        path: ':id', component: UnitComponent,
        children: [
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
