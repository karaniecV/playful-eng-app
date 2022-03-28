import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../../data.service';


@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
  private unitSubscription!: Subscription;
  tasks: any
  name: string | undefined;
  madalTask: any = '';
  openMadal = false;
  isArray = false

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.unitSubscription = this.route.paramMap
      .subscribe((paramMap: ParamMap) => {
        const data = this.dataService.getTasksByLesson(paramMap.get('id'));
        this.tasks = data

      });
  }
  onOpenMadal(task: any) {
    this.madalTask = task;
    this.isArray = Array.isArray(task.src)
    this.openMadal = true;
  }
  onCloseMadal() {
    this.madalTask = '';
    this.openMadal = false;
  }

}
