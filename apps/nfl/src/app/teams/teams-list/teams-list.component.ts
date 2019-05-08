import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Team } from '@level/core-data';

@Component({
  selector: 'level-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent {
  @Input() teams: Team;
  @Output() selected = new EventEmitter();

  submitSelectedTeam(team) {
    this.selected.emit(team);
  }
}
