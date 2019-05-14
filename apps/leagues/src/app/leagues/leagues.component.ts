import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { League, LeaguesService, LeaguesFacade } from '@level/core-data';

@Component({
  selector: 'level-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent implements OnInit {
  form: FormGroup;
  leagues$: Observable<League[]> = this.leaguesFacade.allLeagues$;
  selectedLeague$: Observable<League> = this.leaguesFacade.selectedLeague$;

  constructor(
    private leaguesService: LeaguesService,
    private leaguesFacade: LeaguesFacade,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.leaguesFacade.loadLeagues();
    this.initForm();
    this.resetLeague();
  }

  selectLeague(league) {
    this.leaguesFacade.selectLeague(league);
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
