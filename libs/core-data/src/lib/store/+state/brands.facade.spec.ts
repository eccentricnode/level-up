import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/nx/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/nx';

import { BrandsEffects } from './brands.effects';
import { BrandsFacade } from './brands.facade';

import { brandsQuery } from './brands.selectors';
import { LoadBrands, BrandsLoaded } from './brands.actions';
import {
  BrandsState,
  Entity,
  initialState,
  brandsReducer
} from './brands.reducer';

interface TestSchema {
  brands: BrandsState;
}

describe('BrandsFacade', () => {
  let facade: BrandsFacade;
  let store: Store<TestSchema>;
  let createBrands;

  beforeEach(() => {
    createBrands = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('brands', brandsReducer, { initialState }),
          EffectsModule.forFeature([BrandsEffects])
        ],
        providers: [BrandsFacade]
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
      facade = TestBed.get(BrandsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allBrands$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allBrands$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `BrandsLoaded` to manually submit list for state management
     */
    it('allBrands$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allBrands$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          new BrandsLoaded([createBrands('AAA'), createBrands('BBB')])
        );

        list = await readFirst(facade.allBrands$);
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
