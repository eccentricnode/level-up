import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Planet, PlanetsService, PlanetsFacade } from '@level/core-data';

@Component({
  selector: 'level-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  form: FormGroup;
  planets$: Observable<Planet[]> = this.planetsFacade.allPlanets$;
  selectedPlanet$: Observable<Planet> = this.planetsFacade.selectedPlanet$;

  constructor(
    private planetsService: PlanetsService,
    private planetsFacade: PlanetsFacade,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.planetsFacade.loadPlanets();
    this.initForm();
    this.resetForm();
  }

  selectPlanet(planet) {
    this.planetsFacade.selectPlanet(planet);
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