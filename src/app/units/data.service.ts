import { Injectable } from '@angular/core';
import data from './../data.json';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  curentUnit: number = 0;
  lessonsArr: any;

  getUnits(){
    return data.units
  }

  getLessonsByUnit(id:any){
    const lessonsObj = data.lessons[id - 1]
    this.lessonsArr = Object.entries(lessonsObj);
    this.curentUnit = id
    return this.lessonsArr
  }

  getTasksByLesson(lessonId:any){
    const tasksArr =  Object.entries(this.lessonsArr[0][1][lessonId - 1])
    return tasksArr[0][1]
  }
}
