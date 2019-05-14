import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { League } from '@level/core-data';

@Component({
  selector: 'level-league-details',
  templateUrl: './league-details.component.html',
  styleUrls: ['./league-details.component.scss']
})
export class LeagueDetailsComponent {
  @Input() group: FormGroup;
  @Output() reset = new EventEmitter();

  @Input()
  set selectedLeague(value: League) {
    this.group.patchValue({
      id: null,
      name: value.name,
      tier: value.tier
    });
  }

  resetForm() {
    this.reset.emit();
  }
}
