import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss']
})
export class UnitComponent implements OnInit {
  private unitSubscription!: Subscription;
  unit: any;
  unitId: any;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.unitSubscription = this.route.paramMap
      .subscribe((paramMap: ParamMap) => {
        const data = this.dataService.getLessonsByUnit(paramMap.get('id'));
        this.unit = data[0][1]
        this.unitId = data[0][0]
        console.log(this.unitId)

      });
  }

  onGoLesson(id:number) {
    this.router.navigate([`/units/${this.unitId}/lesson`, id])
  }
}
