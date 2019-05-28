import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/nx/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/nx';

import { LaptopsEffects } from './laptops.effects';
import { LaptopsFacade } from './laptops.facade';

import { laptopsQuery } from './laptops.selectors';
import { LoadLaptops, LaptopsLoaded } from './laptops.actions';
import {
  LaptopsState,
  Entity,
  initialState,
  laptopsReducer
} from './laptops.reducer';

interface TestSchema {
  laptops: LaptopsState;
}

describe('LaptopsFacade', () => {
  let facade: LaptopsFacade;
  let store: Store<TestSchema>;
  let createLaptops;

  beforeEach(() => {
    createLaptops = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('laptops', laptopsReducer, { initialState }),
          EffectsModule.forFeature([LaptopsEffects])
        ],
        providers: [LaptopsFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(LaptopsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allLaptops$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allLaptops$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `LaptopsLoaded` to manually submit list for state management
     */
    it('allLaptops$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allLaptops$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          new LaptopsLoaded([createLaptops('AAA'), createLaptops('BBB')])
        );

        list = await readFirst(facade.allLaptops$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
