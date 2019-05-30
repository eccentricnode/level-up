import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MmosFacade, Mmo } from '@level/core-data';

@Component({
  selector: 'level-mmos',
  templateUrl: './mmos.component.html',
  styleUrls: ['./mmos.component.scss']
})
export class MmosComponent implements OnInit {
  mmos$: Observable<Mmo[]> = this.mmosFacade.allMmos$;
  worstMMos: Mmo[];
  bestMmos: Mmo[] = [
    {
      id: '987',
      name: 'RuneScape',
    },
    {
      id: '227',
      name: 'SWOTR',
    },
    {
      id: '937',
      name: 'Planetside 2',
    },
  ];

  constructor(private mmosFacade: MmosFacade) {}

  ngOnInit() {
    this.mmosFacade.loadAll();
    this.mmos$.subscribe(mmos => this.worstMMos = mmos);
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
