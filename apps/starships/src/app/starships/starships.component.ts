import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Starship, StarshipsFacade } from '@level/core-data';

@Component({
  selector: 'level-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {
  form: FormGroup;
  starships$: Observable<Starship[]> = this.starshipsFacade.allStarships$;
  currentStarship$: Observable<Starship> = this.starshipsFacade.currentStarships$;

  constructor(
    private starshipsFacade: StarshipsFacade,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.initForm();
    this.starshipsFacade.loadStarships();
    this.form.reset();
  }

  resetCurrentStarship() {
    this.selectStarship({id: null});
    this.form.reset();
  }

  selectStarship(starship) {
    this.starshipsFacade.selectStarship(starship);
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: '',
      name: {value: '', disabled: true},
      model: {value: '', disabled: true},
      manufacturer: {value: '', disabled: true},
      crew: {value: '', disabled: true},
      passengers: {value: '', disabled: true},
      cargo_capacity: {value: '', disabled: true},
    })
  }
}
