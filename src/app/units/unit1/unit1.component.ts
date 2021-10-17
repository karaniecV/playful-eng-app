import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit1',
  templateUrl: './unit1.component.html',
  styleUrls: ['./unit1.component.scss']
})
export class Unit1Component implements OnInit {

  constructor() { }

  lessons = [
    { id: 1, title: 'Lessons 1'},
    { id: 2, title: 'Lessons 2'},
    { id: 3, title: 'Lessons 3'},
    { id: 4, title: 'Lessons 4'},
    { id: 5, title: 'Lessons 5'},
    { id: 6, title: 'Lessons 6'},
    { id: 7, title: 'Lessons 7'},
    { id: 8, title: 'Lessons 8'},
    { id: 9, title: 'Lessons 9'},
    { id: 10, title: 'Lessons 10'},
  ];


  ngOnInit(): void {
  }

}
