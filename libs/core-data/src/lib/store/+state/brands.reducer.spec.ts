import { BrandsLoaded } from './brands.actions';
import {
  BrandsState,
  Entity,
  initialState,
  brandsReducer
} from './brands.reducer';

describe('Brands Reducer', () => {
  const getBrandsId = it => it['id'];
  let createBrands;

  beforeEach(() => {
    createBrands = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Brands actions ', () => {
    it('should return set the list of known Brands', () => {
      const brandss = [
        createBrands('PRODUCT-AAA'),
        createBrands('PRODUCT-zzz')
      ];
      const action = new BrandsLoaded(brandss);
      const result: BrandsState = brandsReducer(initialState, action);
      const selId: string = getBrandsId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = brandsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
