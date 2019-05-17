import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { PlayersState } from './players.reducer';
import {
  LoadPlayers,
  PlayersLoaded,
  PlayersActionTypes
} from './players.actions';

import { PlayersService } from '../../players/players.service';
import { Player } from '../../players/player.model';

@Injectable()
export class PlayersEffects {
  @Effect() loadPlayers$ = this.dataPersistence.fetch(PlayersActionTypes.LoadPlayers, {
      run: (action: LoadPlayers, state: PlayersState) => {
        return this.playersService.all().pipe(map((res: Player[]) => new PlayersLoaded(res)));
      },

      onError: (action: LoadPlayers, error) => {
        console.error('Error', error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<PlayersState>,
    private playersService: PlayersService
  ) {}
}
