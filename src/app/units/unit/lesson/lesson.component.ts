import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
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

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.unitSubscription = this.route.paramMap
      .subscribe((paramMap: ParamMap) => {
        const data = this.dataService.getTasksByLesson(paramMap.get('id'));
        this.tasks = data
      });
  }


}
