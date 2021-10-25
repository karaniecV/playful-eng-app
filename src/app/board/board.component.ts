import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import data from './../data.json';

interface Units {  
  id: number;  
  title: string;
  imgUrl: string
}  

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(private router: Router) { }
  units: Units[] = data.units

  ngOnInit(): void {

  }

  onGoToUnit(id:any){
  }

}
