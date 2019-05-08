import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Team } from '@level/core-data';

@Component({
  selector: 'level-teams-details',
  templateUrl: './teams-details.component.html',
  styleUrls: ['./teams-details.component.scss']
})
export class TeamsDetailsComponent {
  @Input() detailsGroup: FormGroup;
  @Output() reset = new EventEmitter();

  @Input() set selectedTeam(value: Team) {
    if(!value) return;
    this.detailsGroup.patchValue({
      id: null,
      Team_preffered_name: value.Team_preffered_name,
      Team_Conference_Division: value.Team_Conference_Division,
      arrest_count: value.arrest_count,
    });
  }

  resetForm() {
    this.reset.emit();
  }
}
