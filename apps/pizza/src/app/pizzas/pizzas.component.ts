import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { PizzaService, Pizza, PizzasFacade } from '@level/core-data';

@Component({
  selector: 'level-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss']
})
export class PizzasComponent implements OnInit {
  pizzas$: Observable<Pizza[]> = this.pizzaFacade.allPizzas$;

  pizzas: Pizza[];

  constructor(
    private pizzaFacade: PizzasFacade
  ) { }

  ngOnInit() {
    this.pizzaFacade.loadAll();
    this.pizzas$.subscribe(pizzas => this.pizzas = pizzas);
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    moveItemInArray(this.pizzas, event.previousIndex, event.currentIndex);
  }
}
