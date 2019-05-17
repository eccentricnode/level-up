import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Player } from '@level/core-data';

@Component({
  selector: 'level-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss']
})
export class PlayerDetailsComponent {
  currentPlayer: Player;
  @Input() group: FormGroup;
  @Output() reset = new EventEmitter();

  @Input() set selectedPlayer(value: Player) {
    this.currentPlayer = value;
    if(!value) return;
    this.group.patchValue({
      id: value.id,
      name: value.name,
      height: value.height,
      position: value.position,
      number: value.number,
      team: value.team
    });
  }

  resetForm() {
    this.reset.emit();
  }
}
