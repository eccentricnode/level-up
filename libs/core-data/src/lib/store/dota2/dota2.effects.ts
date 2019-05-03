import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { Dota2Service } from '../../dota2/dota2.service';
import { Dota2 } from '../../dota2/dota2.model';

import { 
  LoadDota2, 
  Dota2Loaded, 
  Dota2ActionTypes, 
} from './dota2.actions';
import { Dota2State  } from './dota2.reducer';

@Injectable()
export class Dota2Effects {
  @Effect() effect$ = this.actions$.pipe(ofType(Dota2ActionTypes.Dota2Action))

  @Effect() 
  loadDota2$ = this.dataPersistence.fetch(Dota2ActionTypes.LoadDota2, {
    run: (action: LoadDota2, state: Dota2State) => {
     return this.dota2Service.all().pipe(map((res: Dota2[]) => new Dota2Loaded(res)));
   },

   onError: (action: LoadDota2, error) => {
     console.error('Error', error);
   }
 });

 constructor(
   private actions$: Actions,
   private dataPersistence: DataPersistence<Dota2State>,
   private dota2Service: Dota2Service
   ) { }
}
