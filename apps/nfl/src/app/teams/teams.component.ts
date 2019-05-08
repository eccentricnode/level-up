import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Team, TeamsService, NflTeamsFacade } from '@level/core-data';

@Component({
  selector: 'level-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  form: FormGroup
  teams$: Observable<Team[]> = this.nflTeamsFacade.allTeams$;
  selectedTeam$: Observable<Team> = this.nflTeamsFacade.selectedTeams$;
  
  constructor(
    private teamsService: TeamsService,
    private nflTeamsFacade: NflTeamsFacade,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.nflTeamsFacade.loadTeams();
    this.initForm();
    this.resetTeam();
  }

  selectTeam(team) {
    this.nflTeamsFacade.selectTeam(team);
  }

  resetTeam() {
    this.form.reset();
    this.selectTeam({id: null});
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: null,
      Team_preffered_name: { value: '', disabled: true },
      Team_Conference_Division: { value: '', disabled: true },
      arrest_count: { value: '', disabled: true },
    });
  }
}
