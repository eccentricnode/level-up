import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Player, PlayersService } from '@level/core-data';

@Component({
  selector: 'level-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  form: FormGroup;
  players$: Observable<Player[]>;
  selectedPlayer;

  constructor(
    private playersService: PlayersService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
    this.getPlayers();
    this.reset();
  }

  getPlayers() {
    this.players$ = this.playersService.all();
  }

  selectPlayer(player) {
    this.selectedPlayer = player;
  }

  reset() {
    this.form.reset();
    this.selectPlayer({id: null});
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null, 
      name: { value: '', disabled: true },
      height: { value: '', disabled: true },
      position: { value: '', disabled: true },
      number: { value: '', disabled: true },
      team: { value: '', disabled: true },
    });
  }
}
