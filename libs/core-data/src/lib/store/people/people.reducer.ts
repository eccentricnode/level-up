import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { PeopleAction, PeopleActionTypes, PeopleSelected } from './people.actions';

import { Person } from '../../people/person.model';

export interface PeopleState extends EntityState<Person> {
  selectedPersonId: string | null;
}

export const adapter: EntityAdapter<Person> = createEntityAdapter<Person>();
export const initialState: PeopleState = adapter.getInitialState({
  selectedPersonId: null
});

export function peopleReducer(state: PeopleState = initialState, action: PeopleAction): PeopleState {
  switch (action.type) {
    case PeopleActionTypes.PeopleSelected: {
      return Object.assign({}, state, { selectedPersonId: action.payload.id });
    }

    case PeopleActionTypes.PeopleLoaded: {
     return adapter.addAll(action.payload, state)
    }
    
    default: 
      return state;
  }
}

export const getSelectedPersonId = (state: PeopleState) => state.selectedPersonId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// select the array of person ids
export const selectPersonIds = selectIds;

// select the dictionary of person entities
export const selectPersonEntities = selectEntities;

// select the the array of people
export const selectAllPeople = selectAll;

//selecty te total person count 
export const selectPersonTotal = selectTotal;