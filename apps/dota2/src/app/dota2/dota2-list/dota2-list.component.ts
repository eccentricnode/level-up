import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Dota2 } from '@level/core-data';

@Component({
  selector: 'level-dota2-list',
  templateUrl: './dota2-list.component.html',
  styleUrls: ['./dota2-list.component.scss']
})
export class Dota2ListComponent {
  @Input() teams: Dota2;
  @Output() selected = new EventEmitter();

  selectTeamSubmit(team) {
    this.selected.emit(team);
  }
}
