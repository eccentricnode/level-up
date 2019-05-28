import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { LaptopsEffects } from './laptops.effects';
import { LoadLaptops, LaptopsLoaded } from './laptops.actions';

describe('LaptopsEffects', () => {
  let actions: Observable<any>;
  let effects: LaptopsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        LaptopsEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(LaptopsEffects);
  });

  describe('loadLaptops$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadLaptops() });
      expect(effects.loadLaptops$).toBeObservable(
        hot('-a-|', { a: new LaptopsLoaded([]) })
      );
    });
  });
});
