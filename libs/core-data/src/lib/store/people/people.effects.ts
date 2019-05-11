import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { PeopleState } from './people.reducer';
import {
  LoadPeople,
  PeopleLoaded,
  PeopleActionTypes
} from './people.actions';

import { PeopleService } from '../../people/people.service';
import { Person } from '../../people/person.model';

@Injectable()
export class PeopleEffects {
  @Effect() loadPeople$ = this.dataPersistence.fetch(PeopleActionTypes.LoadPeople, {
      run: (action: LoadPeople, state: PeopleState) => {
        return this.peopleService.all().pipe(map((res: Person[]) => new PeopleLoaded(res)));
      },

      onError: (action: LoadPeople, error) => {
        console.error('Error', error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<PeopleState>,
    private peopleService: PeopleService
  ) {}
}
