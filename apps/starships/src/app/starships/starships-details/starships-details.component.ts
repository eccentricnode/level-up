import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Starship } from '@level/core-data';

@Component({
  selector: 'level-starships-details',
  templateUrl: './starships-details.component.html',
  styleUrls: ['./starships-details.component.scss']
})
export class StarshipsDetailsComponent {
  @Input() detailsGroup: FormGroup;
  @Output() reset = new EventEmitter();

  @Input()
  set selectedStarship(value: Starship) {
    if (!value) return;
    this.detailsGroup.patchValue({
      name: value.name,
      model: value.model,
      manufacturer: value.manufacturer,
      crew: value.crew,
      passengers: value.passengers,
      cargo_capacity: value.cargo_capacity
    });
  }

  resetFormSubmit(starship) {
    this.reset.emit(starship);
  }
}
