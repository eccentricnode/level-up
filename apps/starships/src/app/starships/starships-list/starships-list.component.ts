import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Starship } from '@level/core-data';

@Component({
  selector: 'level-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss']
})
export class StarshipsListComponent {
  @Input() starships: Starship;
  @Output() selected = new EventEmitter();

  selectStarshipSubmit(starship) {
    this.selected.emit(starship);
  }
}
