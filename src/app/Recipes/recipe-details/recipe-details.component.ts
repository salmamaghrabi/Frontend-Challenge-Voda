import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faThumbsUp, faClock, faHeart } from '@fortawesome/free-regular-svg-icons';
import { Food } from '../../Models/food';
import { FoodService } from '../../service/service/food.service';
//import { Subscription } from 'rxjs';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent implements OnInit {
  faThumbsUp = faThumbsUp
  faClock = faClock
  faHeart = faHeart
  food !: Food
  constructor(private activatedRoute: ActivatedRoute, private foodService: FoodService) {

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id'])
        this.food = this.foodService.getFoodById(params['id'])
      console.log('hello')

    })
  }

}

