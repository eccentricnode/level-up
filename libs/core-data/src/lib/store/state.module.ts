import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { NxModule } from '@nrwl/nx';
import { reducers } from '.';

import { StarshipsEffects } from './starships/starships.effects';
import { StarshipsFacade } from './starships/starships.facade';
import { ROCKETS_FEATURE_KEY, initialState as rocketsInitialState, rocketsReducer } from './+state/rockets.reducer';
import { RocketsEffects } from './+state/rockets.effects';
import { RocketsFacade } from './+state/rockets.facade';
import { environment } from '../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NxModule.forRoot(),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
    EffectsModule.forRoot([StarshipsEffects]),
    StoreModule.forRoot(
  { rockets: rocketsReducer },
  {
    initialState : { rockets : rocketsInitialState },
    metaReducers : !environment.production ? [storeFreeze] : []
  }
),
    EffectsModule.forRoot([RocketsEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [StarshipsFacade, RocketsFacade]
})
export class StateModule {}
