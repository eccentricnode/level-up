import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '@level/core-data';

@Component({
  selector: 'level-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent {
  @Input() players: Player;
  @Output() selected = new EventEmitter();

  select(player: Player) {
    this.selected.emit(player);
  }
}
