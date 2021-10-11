import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { BoardComponent } from './board/board.component';
import { Unit1Component } from './units/unit1/unit1.component';
import { Unit2Component } from './units/unit2/unit2.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  {
    path: 'board', component: BoardComponent,
    
  },
    {
      path: 'unit1',
      component: Unit1Component,
    },
    {
      path: 'unit2',
      component: Unit2Component,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
