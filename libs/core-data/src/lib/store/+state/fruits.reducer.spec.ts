import { FruitsLoaded } from './fruits.actions';
import {
  FruitsState,
  Entity,
  initialState,
  fruitsReducer
} from './fruits.reducer';

describe('Fruits Reducer', () => {
  const getFruitsId = it => it['id'];
  let createFruits;

  beforeEach(() => {
    createFruits = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Fruits actions ', () => {
    it('should return set the list of known Fruits', () => {
      const fruitss = [
        createFruits('PRODUCT-AAA'),
        createFruits('PRODUCT-zzz')
      ];
      const action = new FruitsLoaded(fruitss);
      const result: FruitsState = fruitsReducer(initialState, action);
      const selId: string = getFruitsId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = fruitsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
