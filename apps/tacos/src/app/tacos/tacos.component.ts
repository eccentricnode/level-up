import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { Taco, TacosService } from '@level/core-data';

@Component({
  selector: 'level-tacos',
  templateUrl: './tacos.component.html',
  styleUrls: ['./tacos.component.scss']
})
export class TacosComponent implements OnInit {
  tacos$: Observable<Taco[]>;
  tacos: Taco[];

  constructor(private tacosService: TacosService) { }

  ngOnInit() {
    this.getTacos();
    this.tacos$.subscribe(tacos => this.tacos = tacos);
  }

  getTacos() {
    this.tacos$ = this.tacosService.all();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tacos, event.previousIndex, event.currentIndex);
  }
}
