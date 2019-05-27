import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { BrandsEffects } from './brands.effects';
import { LoadBrands, BrandsLoaded } from './brands.actions';

describe('BrandsEffects', () => {
  let actions: Observable<any>;
  let effects: BrandsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        BrandsEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(BrandsEffects);
  });

  describe('loadBrands$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadBrands() });
      expect(effects.loadBrands$).toBeObservable(
        hot('-a-|', { a: new BrandsLoaded([]) })
      );
    });
  });
});
