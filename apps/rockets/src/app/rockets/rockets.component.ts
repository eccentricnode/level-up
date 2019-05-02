import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Rocket, RocketsService } from '@level/core-data';

@Component({
  selector: 'level-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.scss']
})
export class RocketsComponent implements OnInit {
  form: FormGroup;
  rockets$;
  selectedRocket: Rocket;

  constructor(
    private rocketsService: RocketsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
    this.getRockets();
    this.resetRocket();
  }

  getRockets() {
    this.rockets$ = this.rocketsService.all();
  }

  selectRocket(rocket) {
    this.selectedRocket = rocket;
  }

  resetRocket() { //refactor this when NgRx is built out
    this.form.reset();
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: null,
      rocket_name: {value: '', disabled: true},
      company: {value: '', disabled: true},
      first_flight: {value: '', disabled: true},
      success_rate_pct: {value: null, disabled: true},
      description: {value: '', disabled: true},
    });
  }
}
