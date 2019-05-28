import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { LaptopsFacade, Laptop } from '@level/core-data';

@Component({
  selector: 'level-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.scss']
})
export class LaptopsComponent implements OnInit {
  laptops$: Observable<Laptop[]> = this.laptopsFacade.allLaptops$;
  worstLaptops: Laptop[];
  bestLaptops: Laptop[] = [
    {
      id: `653`,
      name: `MSI`,
    },
    {
      id: `888`,
      name: `Gigabyte`,
    },
    {
      id: `009`,
      name: `Razer`,
    },
    {
      id: `563`,
      name: `Lenovo`,
    },
  ];

  constructor(private laptopsFacade: LaptopsFacade) {}

  ngOnInit() {
    this.laptopsFacade.loadAll();
    this.laptops$.subscribe(laptops => this.worstLaptops = laptops);
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
