import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Rocket } from '@level/core-data';

@Component({
  selector: 'level-rocket-list',
  templateUrl: './rocket-list.component.html',
  styleUrls: ['./rocket-list.component.scss']
})
export class RocketListComponent {
  @Input() rockets: Rocket;
  @Output() selected = new EventEmitter();

  selectedRocketSubmit(rocket) {
    this.selected.emit(rocket);
  }
}
