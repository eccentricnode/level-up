import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { FruitsEffects } from './fruits.effects';
import { LoadFruits, FruitsLoaded } from './fruits.actions';

describe('FruitsEffects', () => {
  let actions: Observable<any>;
  let effects: FruitsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        FruitsEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(FruitsEffects);
  });

  describe('loadFruits$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadFruits() });
      expect(effects.loadFruits$).toBeObservable(
        hot('-a-|', { a: new FruitsLoaded([]) })
      );
    });
  });
});
