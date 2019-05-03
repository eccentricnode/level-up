import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Guild } from '@level/core-data';

@Component({
  selector: 'level-guild-details',
  templateUrl: './guild-details.component.html',
  styleUrls: ['./guild-details.component.scss']
})
export class GuildDetailsComponent {
  @Input() detailsGroup: FormGroup;
  @Output() reset = new EventEmitter();

  @Input() set selectedAchievement(value: Guild){
    if(!value) return;
    this.detailsGroup.patchValue({
      id: null,
      name: value.name,
      description: value.description,
      requirement: value.requirement
    });
  }

  resetForm() {
    this.reset.emit();
  }
}
