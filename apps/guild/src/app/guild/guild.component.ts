import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Guild, GuildService } from '@level/core-data';

@Component({
  selector: 'level-guild',
  templateUrl: './guild.component.html',
  styleUrls: ['./guild.component.scss']
})
export class GuildComponent implements OnInit {
  form: FormGroup;
  achievements$;
  selectedAchievement: Guild;

  constructor(
    private guildService: GuildService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
    this.resetForm();
    this.getAchievements();
  }

  selectAchievement(achievement) {
    this.selectedAchievement = achievement;
  }

  getAchievements() {
    this.achievements$ = this.guildService.getAchievements();
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: null,
      name: { value: '', disabled: true },
      description: { value: '', disabled: true },
      requirement: { value: '', disabled: true },
    });
  }

  resetForm() {
    this.form.reset();
  }
}
