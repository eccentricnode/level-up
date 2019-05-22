import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { DrinksService, Drink } from '@level/core-data';

@Component({
  selector: 'level-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {
  drinks$: Observable<Drink[]>;
  worstDrinks: Drink[] = [];
  bestDrinks: Drink[] = [
    {
      id: 34,
      name: "Joker Mad",
      caffeine: 206,
      sugar: 54,
      founder: "Hansen's Beverages"
    }
  ];

  constructor(private drinksService: DrinksService) { }

  ngOnInit() {
    this.getDrinks();
    this.drinks$.subscribe(drinks => this.worstDrinks = drinks);
  }

  getDrinks() {
    this.drinks$ = this.drinksService.all();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data,
        event.previousIndex, event.currentIndex);
    }
  }
}
