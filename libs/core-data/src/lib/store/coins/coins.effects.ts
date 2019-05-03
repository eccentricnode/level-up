import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { Coin } from '../../crypto/crypto.model';
import { CoinService } from '../../crypto/crypto.service';

import {
  LoadCoins,
  CoinsLoaded,
  CoinsActionTypes
} from './coins.actions';
import { CoinsState } from './coins.reducer';

@Injectable()
export class CoinsEffects {
  @Effect() loadCoins$ = this.dataPersistence.fetch(CoinsActionTypes.LoadCoins, {
      run: (action: LoadCoins, state: CoinsState) => {
        return this.coinService.all().pipe(map((res: Coin[]) => new CoinsLoaded(res)));
      },

      onError: (action: LoadCoins, error) => {
        console.error('Error', error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<CoinsState>,
    private coinService: CoinService
  ) {}
}
