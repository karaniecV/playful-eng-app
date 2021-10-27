import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

interface Units {  
  id: number;  
  title: string;
  imgUrl: string
}  


@Component({
  selector: 'app-units-list',
  templateUrl: './units-list.component.html',
  styleUrls: ['./units-list.component.scss']
})
export class UnitsListComponent implements OnInit {

  constructor(private router: Router, private dataServise: DataService) { }
  units: Units[] =[]

  ngOnInit(): void {
    this.units = this.dataServise.getUnits()
  }

  onGoToUnit(id:any){
    this.router.navigate(['units', id])

  }


}
