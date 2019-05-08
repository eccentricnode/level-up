import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Team, TeamsService } from '@level/core-data';

@Component({
  selector: 'level-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  form: FormGroup
  teams$;
  selectedTeam: Team;
  
  constructor(
    private teamsService: TeamsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.getTeams();
    this.initForm();
    this.resetTeam();
  }

  getTeams() {
    this.teams$ = this.teamsService.all();
  }

  selectTeam(team) {
    this.selectedTeam = team;
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
