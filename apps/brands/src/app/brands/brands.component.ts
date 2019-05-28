import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandsFacade, Brand } from '@level/core-data';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'level-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  brands$: Observable<Brand[]> = this.brandsFacade.allBrands$;
  worstBrands: Brand[];
  bestBrands: Brand[] = [
    {
      id: `876`,
      name: `Puma`,
      founder: `Rudolf Dassler`,
    }
  ];


  constructor(private brandsFacade: BrandsFacade) {}

  ngOnInit() {
    this.brandsFacade.loadAll();
    this.brands$.subscribe(brands => this.worstBrands = brands);
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
