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
  @Output() submitted = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set selectedPlayer(value: Player) {
    this.selectedPlayer = value;
    if(!value) return;
    this.group.patchValue({
      id: value.id,
      name: value.name,
      height: value.height,
      number: value.number,
      team: value.team
    });
  }

  submit(directive: NgForm) {
    if (this.group.valid) {
      this.submitted.emit(this.group.value);
      directive.resetForm();
    }
  }

  cancel() {
    this.cancelled.emit();
  }

  validateField(control: string, directive: NgForm) {
    return this.group.get(control).invalid && directive.submitted;
  }

  determineUpdate() {
    return !!this.group.value.id;
  }
}
