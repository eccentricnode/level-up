import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Coin } from '../../crypto/crypto.model';

import { CoinsAction, CoinsActionTypes } from './coins.actions';

export interface CoinsState extends EntityState<Coin>{
  selectedCoinId: string | null;
}

export const adapter: EntityAdapter<Coin> = createEntityAdapter<Coin>();
export const initialState: CoinsState = adapter.getInitialState ({
  selectedCoinId: null,
});

export function coinsReducer(state: CoinsState = initialState, action: CoinsAction): CoinsState {
  switch (action.type) {
    case CoinsActionTypes.CoinSelected: {
      return Object.assign({}, state, { selectedCoinId: action.payload.id});
    };

    case CoinsActionTypes.CoinsLoaded: {
      return adapter.addAll(action.payload, state)  ;
    };
    
    default: 
      return state;
  }
}

export const getSelectedCoinId = (state: CoinsState) => state.selectedCoinId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// select the array of coin ids
export const selectCoinIds = selectIds;

// select the dictionary of coin entities
export const selectCoinEntities = selectEntities;

// select the array of coins
export const selectAllCoins = selectAll;

// select the total coin count
export const selectCoinTotal = selectTotal;