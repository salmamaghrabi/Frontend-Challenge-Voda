import { Component, OnInit, input } from '@angular/core';
import { faThumbsUp, faClock, faHeart } from '@fortawesome/free-regular-svg-icons';
import { Router } from 'express';
import { Food } from '../../Models/food';
import { FoodService } from '../../service/service/food.service';
import { ActivatedRoute } from '@angular/router';
//import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'

})
export class HomeComponent implements OnInit {
  // fontawesome
  faThumbsUp = faThumbsUp
  faClock = faClock
  faHeart = faHeart
  foods: Food[] = [];
  //isFavorite: Food['fav'];
  constructor(private activatedRoute: ActivatedRoute, private foodService: FoodService) { }
  ngOnInit(): void {
    this.foods = this.foodService.getAll()
  }
  // onClick(){
  //   this.isFavorite != this.isFavorite;
  // }

}
