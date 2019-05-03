import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Dota2, Dota2Service, Dota2Facade } from '@level/core-data';

@Component({
  selector: 'level-dota2',
  templateUrl: './dota2.component.html',
  styleUrls: ['./dota2.component.scss']
})
export class Dota2Component implements OnInit {
  form: FormGroup;
  teams$: Observable<Dota2[]> = this.dota2Facade.teams$;
  selectedTeam$: Observable<Dota2> = this.dota2Facade.selectedDota2$;

  constructor(
    private formBuilder: FormBuilder,
    private dota2Facade: Dota2Facade,
    private dota2Service: Dota2Service
  ) {}

  ngOnInit() {
    this.initForm();
    this.dota2Facade.loadTeams();
    this.resetForm();
  }

  selectTeam(team) {
    this.dota2Facade.selectTeam(team);
  }

  resetForm() {
    this.selectTeam({id: null});
    this.form.reset();
  }

  initForm() {
    this.form = this.formBuilder.group({
      team_id: null,
      name: { value: '', disabled: true },
      wins: { value: null, disabled: true },
      losses: { value: null, disabled: true },
      rating: { value: null, disabled: true }
    });
  }  
}
