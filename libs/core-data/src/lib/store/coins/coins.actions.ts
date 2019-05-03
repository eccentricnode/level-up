import { Action } from '@ngrx/store';
import { Coin } from '../../crypto/crypto.model';

export enum CoinsActionTypes {
  CoinsAction = '[Coins] Action',
  CoinSelected= '[Coins] Selected',
  LoadCoins = '[Coins] Load Coins',
  CoinsLoaded = '[Coins] Coins Loaded',
}

export class Coins implements Action {
  readonly type = CoinsActionTypes.CoinsAction;
}

export class CoinSelected implements Action {
  readonly type = CoinsActionTypes.CoinSelected;
  constructor(public payload) { }
}

export class LoadCoins implements Action {
  readonly type = CoinsActionTypes.LoadCoins;
}

export class CoinsLoaded implements Action {
  readonly type = CoinsActionTypes.CoinsLoaded;
  constructor(public payload: Coin[]) {}
}

export type CoinsAction = Coins
  | CoinSelected
  | LoadCoins
  | CoinsLoaded
;