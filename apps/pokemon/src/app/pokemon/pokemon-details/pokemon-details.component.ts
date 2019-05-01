import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PokemonMeta } from '@level/core-data';

@Component({
  selector: 'level-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent {
  @Input() detailsGroup: FormGroup;
  @Output() reset = new EventEmitter();

  @Input() set selectedPokemon(value: PokemonMeta) {
    if(!value) return;
    this.detailsGroup.patchValue({
      name: value.name,
      height: value.height,
      weight: value.weight,
      base_experience: value.base_experience
    });
  }

  resetForm() {
    this.reset.emit();
  }
}
