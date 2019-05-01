import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { Starship } from '../../starships/starship.model';
import { StarshipsService } from '../../starships/starships.service';

import {
  LoadStarships,
  StarshipsLoaded,
  StarshipsActionTypes
} from './starships.actions';
import { StarshipsState } from './starships.reducer';

@Injectable()
export class StarshipsEffects {
  @Effect() effect$ = this.actions$.pipe(ofType(StarshipsActionTypes.StarshipsAction));

  @Effect() 
  loadStarships$ = this.dataPersistence.fetch(StarshipsActionTypes.LoadStarships, {
      run: (action: LoadStarships, state: StarshipsState) => {
        return this.starshipsService.all().pipe(map((res: Starship[]) => new StarshipsLoaded(res)));
      },

      onError: (action: LoadStarships, error) => {
        console.error('Error', error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<StarshipsState>,
    private starshipsService: StarshipsService
  ) {}
}
