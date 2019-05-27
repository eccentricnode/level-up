import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ScrollsFacade, ScrollModel } from '@level/core-data';

@Component({
  selector: 'level-scrolls',
  templateUrl: './scrolls.component.html',
  styleUrls: ['./scrolls.component.scss']
})
export class ScrollsComponent implements OnInit {
  scrolls$: Observable<ScrollModel[]> = this.scrollsFacade.allScrolls$;
  worstGames: ScrollModel[];
  bestGames: ScrollModel[] = [
    {
      id: '563',
      name: 'Skyrim',
      releaseYear: 2011,
    },
  ];

  constructor(private scrollsFacade: ScrollsFacade) { }

  ngOnInit() {
    this.scrollsFacade.loadAll();
    this.scrolls$.subscribe(scrolls => this.worstGames = scrolls);
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
