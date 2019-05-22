import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { DrinksService, Drink } from '@level/core-data';

@Component({
  selector: 'level-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {
  drinks$: Observable<Drink[]>;
  drinks: Drink[];


  constructor(private drinksService: DrinksService) { }

  ngOnInit() {
    this.getDrinks();
    this.drinks$.subscribe(drinks => this.drinks = drinks);
  }

  getDrinks() {
    this.drinks$ = this.drinksService.all();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.drinks, event.previousIndex, event.currentIndex);
  }

}
