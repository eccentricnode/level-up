import { LaptopsLoaded } from './laptops.actions';
import {
  LaptopsState,
  Entity,
  initialState,
  laptopsReducer
} from './laptops.reducer';

describe('Laptops Reducer', () => {
  const getLaptopsId = it => it['id'];
  let createLaptops;

  beforeEach(() => {
    createLaptops = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Laptops actions ', () => {
    it('should return set the list of known Laptops', () => {
      const laptopss = [
        createLaptops('PRODUCT-AAA'),
        createLaptops('PRODUCT-zzz')
      ];
      const action = new LaptopsLoaded(laptopss);
      const result: LaptopsState = laptopsReducer(initialState, action);
      const selId: string = getLaptopsId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = laptopsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
