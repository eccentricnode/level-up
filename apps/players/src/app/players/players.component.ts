import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Player, PlayersFacade } from '@level/core-data';

@Component({
  selector: 'level-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  form: FormGroup;
  players$: Observable<Player[]> = this.playersFacade.allPlayers$;
  selectedPlayer$: Observable<Player> = this.playersFacade.selectedPlayer$;

  constructor(
    private playersFacade: PlayersFacade,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
    this.playersFacade.loadPlayers();
    this.reset();
  }

  selectPlayer(player) {
    this.playersFacade.selectPlayer(player);
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
