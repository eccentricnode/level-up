import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { OperatingSystem, OperatingSystemsFacade } from '@level/core-data';

@Component({
  selector: 'level-operating-systems',
  templateUrl: './operating-systems.component.html',
  styleUrls: ['./operating-systems.component.scss']
})
export class OperatingSystemsComponent implements OnInit {
  operatingSystems$: Observable<OperatingSystem[]> = this.osFacade.allOperatingSystems$;
  worstOS: OperatingSystem[];
  bestOS: OperatingSystem[] = [
    {
      id: '2332',
      name: 'Fuchsia OS',
      creators: 'Google',
      license: 'private'
    }
  ];

  constructor(private osFacade: OperatingSystemsFacade) { }

  ngOnInit() {
    this.osFacade.loadAll();
    this.operatingSystems$.subscribe(oss => this.worstOS = oss);
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
