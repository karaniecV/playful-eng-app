import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(private router: Router) { }
  units = [
    { id: 1, title: 'About Me', imgUrl: './../../assets/units/About me.jpg'},
    { id: 2, title: 'My Family', imgUrl: './../../assets/units/famaly.jpg'},
    { id: 3, title: 'People aroumd me', imgUrl: './../../assets/units/pep.jpg'},
    { id: 4, title: 'Our Pets', imgUrl: './../../assets/units/pets.jpg'},
    { id: 5, title: 'Food', imgUrl: './../../assets/units/food.jpg'},
    { id: 6, title: 'My Home', imgUrl: './../../assets/units/home.png'},
    { id: 7, title: 'In the lesson', imgUrl: './../../assets/units/les.jpg'},
    { id: 8, title: 'Seasons', imgUrl: './../../assets/units/Seasons.png'},
    { id: 9, title: 'I love animals', imgUrl: './../../assets/units/zoo.jpg'},

  ];

  ngOnInit(): void {

  }

  onGoToUnit(id:number){
    this.router.navigate([`unit${id}`])
  }

}
