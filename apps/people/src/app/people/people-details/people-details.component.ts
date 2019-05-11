import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Person } from '@level/core-data';

@Component({
  selector: 'level-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent {
  @Input() group: FormGroup;
  @Output() reset = new EventEmitter();

  @Input() set selectedPerson(value: Person) {
    this.group.patchValue({
      id: null,
      name: value.name,
      mass: value.mass,
      height: value.height,
      gender: value.gender
    });
  }

  resetForm() {
    this.reset.emit();
  }
}