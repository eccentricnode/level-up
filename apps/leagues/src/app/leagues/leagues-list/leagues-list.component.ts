import { Component, Input, Output, EventEmitter } from '@angular/core';
import { League } from '@level/core-data';

@Component({
  selector: 'level-leagues-list',
  templateUrl: './leagues-list.component.html',
  styleUrls: ['./leagues-list.component.scss']
})
export class LeaguesListComponent {
  @Input() leagues: League;
  @Output() selected = new EventEmitter();

  selectedLeagueSubmit(league) {
    this.selected.emit(league);
  }
}
