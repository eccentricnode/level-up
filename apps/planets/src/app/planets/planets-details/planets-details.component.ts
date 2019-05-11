import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Planet } from '@level/core-data';

@Component({
  selector: 'level-planets-details',
  templateUrl: './planets-details.component.html',
  styleUrls: ['./planets-details.component.scss']
})
export class PlanetsDetailsComponent {
  @Input() group: FormGroup;
  @Output() reset = new EventEmitter();

  @Input() set selectedPlanet(value: Planet) { 
    if(!value) return;
    this.group.patchValue({
      id: null,
      name: value.name,
      climate: value.climate,
      gravity: value.gravity,
      terrain: value.terrain,
    });
  }
  
    resetForm() { 
      this.reset.emit();
    }
}
