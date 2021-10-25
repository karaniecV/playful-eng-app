import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: '', component: StartComponent },
  {
    path: 'board', component: BoardComponent,
    children: [
      { path: 'board', component: BoardComponent },
      { path: 'unit/:id', component: Unit1Component },
      { path: 'edit/:id', component: LessonComponent },
    ],
  },
];
// [
//   { path: '', component: StartComponent },
//   { path: 'board', component: BoardComponent, },
//   {
//     path: 'unit1',
//     children: [
//       { path: '', component: Unit1Component },
//       { path: ':id', component: LessonComponent }
//     ]
//   },
//   {
//     path: 'unit1',
//     component: Unit1Component,
//   },
//   { path: 'unit2', component: Unit2Component, },
//   { path: 'unit3', component: Unit3Component, },
//   { path: 'unit4', component: Unit4Component, },
//   { path: 'unit5', component: Unit5Component, },
//   { path: 'unit6', component: Unit6Component, },
//   { path: 'unit7', component: Unit7Component, },
//   { path: 'unit8', component: Unit8Component, },
//   { path: 'unit9', component: Unit9Component, },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
