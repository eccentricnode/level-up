import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ScrollsService, Scrolls } from '@level/core-data';

@Component({
  selector: 'level-scrolls',
  templateUrl: './scrolls.component.html',
  styleUrls: ['./scrolls.component.scss']
})
export class ScrollsComponent implements OnInit {
  scrolls$: Observable<Scrolls[]> 
  worstGames: Scrolls[];
  bestGames: Scrolls[] = [
    {
      id: '563',
      name: 'Skyrim',
      releaseYear: 2011,
    },
  ];

  constructor(private scrollsService: ScrollsService) { }

  ngOnInit() {
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
