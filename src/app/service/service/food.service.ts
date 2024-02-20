import { Injectable } from '@angular/core';
import { Food } from '../../Models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor() { }

  getFoodById(id: number): Food {
    return this.getAll().find(food => food.id == id)!;
  }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Ice Cream 1',
        des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eos perspiciatis optio vel ipsum eveniet expedita quibusdam minus velit neque reiciendis voluptatum obcaecati quod laboriosam nesciunt, commodi voluptas esse dolor in incidunt! Suscipit temporibus dolores similique eveniet repudiandae asperiores optio sed, obcaecati beatae necessitatibus, aut inventore qui cupiditate delectus tempora.',
        inst: ['Lorem ipsum dolor', 'Lorem ipsum dolor'],
        price: 10,
        quantity: 1,
        img: 'assets/1.jpg',
        cookTime: '10 min'
      },
      {
        id: 2,
        name: 'Ice Cream 2',
        des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eos perspiciatis optio vel ipsum eveniet expedita quibusdam minus velit neque reiciendis voluptatum obcaecati quod laboriosam nesciunt, commodi voluptas esse dolor in incidunt! Suscipit temporibus dolores similique eveniet repudiandae asperiores optio sed, obcaecati beatae necessitatibus, aut inventore qui cupiditate delectus tempora.',
        inst: ['Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor'],
        price: 20,
        quantity: 2,
        img: 'assets/5.jpg',
        cookTime: '20 min'
      },
      {
        id: 3,
        name: 'Ice Cream 3',
        des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eos perspiciatis optio vel ipsum eveniet expedita quibusdam minus velit neque reiciendis voluptatum obcaecati quod laboriosam nesciunt, commodi voluptas esse dolor in incidunt! Suscipit temporibus dolores similique eveniet repudiandae asperiores optio sed, obcaecati beatae necessitatibus, aut inventore qui cupiditate delectus tempora.',
        inst: ['Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor'],
        price: 30,
        quantity: 3,
        img: 'assets/6.jpg',
        cookTime: '30 min'
      },
      {
        id: 4,
        name: 'Ice Cream 4',
        des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eos perspiciatis optio vel ipsum eveniet expedita quibusdam minus velit neque reiciendis voluptatum obcaecati quod laboriosam nesciunt, commodi voluptas esse dolor in incidunt! Suscipit temporibus dolores similique eveniet repudiandae asperiores optio sed, obcaecati beatae necessitatibus, aut inventore qui cupiditate delectus tempora.',
        inst: ['Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor'],
        price: 30,
        quantity: 3,
        img: 'assets/6.jpg',
        cookTime: '30 min'
      },

    ]
  }
}
