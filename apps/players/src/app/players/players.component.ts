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

  savePlayer(player: Player) {
    player.id ? this.updatePlayer(player) : this.createPlayer(player);
  }

  createPlayer(player) {
    this.playersService.create(player);
  }

  updatePlayer(player) {
    this.playersService.update(player);
  }

  removePlayer(player: Player) {
    this.playersService.delete(player.id);
  }

  reset() {
    this.form.reset();
    this.selectPlayer({id: null});
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null, 
      name: ['', Validators.compose([Validators.required])],
      height: ['', Validators.compose([Validators.required])],
      number: ['', Validators.compose([Validators.required])],
      team: ['', Validators.compose([Validators.required])],
    });
  }
}
