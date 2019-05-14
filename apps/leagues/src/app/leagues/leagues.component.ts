import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Vehicle, LeaguesService } from '@level/core-data';

@Component({
  selector: 'level-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent implements OnInit {
  form: FormGroup;
  leagues$;
  selectedLeague: Vehicle;

  constructor(
    private leaguesService: LeaguesService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getLeagues();
    this.initForm();
    this.resetLeague();
  }

  getLeagues() {
    this.leagues$ = this.leaguesService.all();
  }

  selectLeague(league) {
    this.selectedLeague = league;
  }

  resetLeague() {
    this.form.reset();
    this.selectLeague({ id: null });
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: null,
      name: { value: '', disabled: true },
      tier: { value: '', disabled: true }
    });
  }
}
