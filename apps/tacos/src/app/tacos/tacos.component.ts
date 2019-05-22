import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { Taco, TacosFacade } from '@level/core-data';

@Component({
  selector: 'level-tacos',
  templateUrl: './tacos.component.html',
  styleUrls: ['./tacos.component.scss']
})
export class TacosComponent implements OnInit {
  tacos$: Observable<Taco[]> = this.tacosFacade.allTacos$;
  tacos: Taco[];

  constructor(private tacosFacade: TacosFacade) { }

  ngOnInit() {
    this.tacosFacade.loadAll();
    this.tacos$.subscribe(tacos => this.tacos = tacos);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tacos, event.previousIndex, event.currentIndex);
  }
}
