import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '@level/core-data';

@Component({
  selector: 'level-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent {
  @Input() people: Person;
  @Output() selected = new EventEmitter();

  submitSelectedPerson(person) {
    this.selected.emit(person);
  }
}
