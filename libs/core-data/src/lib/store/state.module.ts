import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { NxModule } from '@nrwl/nx';
import { reducers } from '.';

import { StarshipsEffects } from './starships/starships.effects';
import { StarshipsFacade } from './starships/starships.facade';

import { RocketsEffects } from './rockets/rockets.effects';
import { RocketsFacade } from './rockets/rockets.facade';

import { Dota2Effects } from './dota2/dota2.effects';
import { Dota2Facade } from './dota2/dota2.facade';

import { AchievementsEffects } from './guild/achievements.effects';
import { AchievementsFacade } from './guild/achievements.facade';

import { CoinsEffects } from './coins/coins.effects';
import { CoinsFacade } from './coins/coins.facade';
import { CITIES_FEATURE_KEY, initialState as citiesInitialState, citiesReducer } from './+state/cities.reducer';
import { CitiesEffects } from './+state/cities.effects';
import { CitiesFacade } from './+state/cities.facade';
import { environment } from '../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NxModule.forRoot(),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
    EffectsModule.forRoot([StarshipsEffects, RocketsEffects, Dota2Effects, AchievementsEffects, CoinsEffects]),
    StoreModule.forRoot(
  { cities: citiesReducer },
  {
    initialState : { cities : citiesInitialState },
    metaReducers : !environment.production ? [storeFreeze] : []
  }
),
    EffectsModule.forRoot([CitiesEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [StarshipsFacade, RocketsFacade, Dota2Facade, AchievementsFacade, CoinsFacade, CitiesFacade]
})
export class StateModule {}
