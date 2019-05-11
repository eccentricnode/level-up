import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Planet, PlanetsService } from '@level/core-data';

@Component({
  selector: 'level-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  form: FormGroup;
  planets$;
  selectedPlanet: Planet;

  constructor(
    private planetsService: PlanetsService, 
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.getPlanets();
    this.initForm();
    this.resetForm();
  }

  getPlanets() {
    this.planets$ = this.planetsService.all();
  }

  selectPlanet(planet) {
    this.selectedPlanet = planet;
  }

  resetForm() {
    this.form.reset();
    this.selectPlanet({id: null});
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: null,
      name: { value: '', disabled: true },
      climate: { value: '', disabled: true },
      gravity: { value: '', disabled: true },
      terrain: { value: '', disabled: true },
    });
  }
}