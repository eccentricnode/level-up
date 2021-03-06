import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Item, ItemsFacade } from '@level/core-data';

@Component({
  selector: 'level-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items$: Observable<Item[]> = this.itemsFacade.allItems$;
  worstItems: Item[];
  bestItems: Item[] = [
    {
      id: '4',
      name: 'Item Four',
      description: 'Item Name Four',
      quantity: 4
    }
  ]

  constructor(private itemsFacade: ItemsFacade) { }

  ngOnInit() {
    this.itemsFacade.loadAll();
    this.items$.subscribe(items => this.worstItems = items);
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
