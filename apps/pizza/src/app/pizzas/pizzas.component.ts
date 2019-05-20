import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { PizzaService, Pizza } from '@level/core-data';

@Component({
  selector: 'level-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss']
})
export class PizzasComponent implements OnInit {
  pizzas$: Observable<Pizza[]>;

  pizzas: Pizza[];

  constructor(
    private pizzaService: PizzaService
  ) { }

  ngOnInit() {
    this.getPizzas();
    this.pizzas$.subscribe(pizzas => this.pizzas = pizzas);
  }

  getPizzas() {
    this.pizzas$ = this.pizzaService.all();
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    moveItemInArray(this.pizzas, event.previousIndex, event.currentIndex);
  }
}
