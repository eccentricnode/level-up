import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Rocket } from '@level/core-data';

@Component({
  selector: 'level-rocket-details',
  templateUrl: './rocket-details.component.html',
  styleUrls: ['./rocket-details.component.scss']
})
export class RocketDetailsComponent {
  @Input() detailsGroup: FormGroup;
  @Output() reset = new EventEmitter();

  @Input() set selectedRocket(value: Rocket) {
    this.detailsGroup.patchValue({
      id: null,
      rocket_name: value.rocket_name,
      company: value.company,
      first_flight: value.first_flight,
      success_rate_pct: value.success_rate_pct,
      description: value.description
    });
  }

  resetFormSubmit() {
    this.reset.emit();
  }
}
