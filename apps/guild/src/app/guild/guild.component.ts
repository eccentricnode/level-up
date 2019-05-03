import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Guild, GuildService, AchievementsFacade } from '@level/core-data';

@Component({
  selector: 'level-guild',
  templateUrl: './guild.component.html',
  styleUrls: ['./guild.component.scss']
})
export class GuildComponent implements OnInit {
  form: FormGroup;
  achievements$: Observable<Guild[]> = this.achievementsFacade.allAchievements$;
  selectedAchievement$: Observable<Guild> = this.achievementsFacade.currentAchievements$;

  constructor(
    private guildService: GuildService,
    private achievementsFacade: AchievementsFacade,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.achievementsFacade.loadAchievements();
    this.initForm();
    this.resetForm();
  }

  selectAchievement(achievement) {
    this.achievementsFacade.selectAchievement(achievement);
  }

  resetForm() {
    this.selectAchievement({id: null});
    this.form.reset();
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: null,
      name: { value: '', disabled: true },
      description: { value: '', disabled: true },
      requirement: { value: '', disabled: true },
    });
  }
}
