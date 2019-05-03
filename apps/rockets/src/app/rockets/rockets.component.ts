import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Rocket, RocketsService, RocketsFacade } from '@level/core-data';

@Component({
  selector: 'level-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.scss']
})
export class RocketsComponent implements OnInit {
  form: FormGroup;
  rockets$: Observable<Rocket[]> = this.rocketsFacade.allRockets$;
  currentRocket$: Observable<Rocket> = this.rocketsFacade.currentRocket$;

  constructor(
    private rocketsService: RocketsService,
    private rocketsFacade: RocketsFacade,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
    this.rocketsFacade.loadRockets();
    this.resetRocket();
  }

  selectRocket(rocket) { console.log(this.rockets$);
    this.rocketsFacade.selectRocket(rocket);
  }

  resetRocket() {
    this.selectRocket({id: null});
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
