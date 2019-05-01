import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

import { PokemonMeta, PokemonService } from '@level/core-data';

@Component({
  selector: 'level-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  form: FormGroup;
  pokemon$;
  selectedPokemon$: Observable<PokemonMeta>

  constructor(
    private pokemonService: PokemonService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.initForm();
    this.resetForm();
    this.getPokemons();
  }

  selectPokemon(pokemon) { 
    this.selectedPokemon$ = this.pokemonService.getUrlWithId(pokemon.url);
  }

  getPokemons() {
    this.pokemon$ = this.pokemonService.all();
  }

  initForm() {
    this.form = this.formBuilder.group({
      name: { value: '', disabled: true },
      height: { value: '', disabled: true },
      weight: { value: '', disabled: true },
      base_experience: { value: '', disabled: true },
    })
  }

  resetForm() {
    this.form.patchValue({
      name: '',
      height: '',
      weight: '',
      base_experience: ''
    })
  }
}
