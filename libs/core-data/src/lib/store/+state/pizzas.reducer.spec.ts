import { PizzasLoaded } from './pizzas.actions';
import {
  PizzasState,
  Entity,
  initialState,
  pizzasReducer
} from './pizzas.reducer';

describe('Pizzas Reducer', () => {
  const getPizzasId = it => it['id'];
  let createPizzas;

  beforeEach(() => {
    createPizzas = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Pizzas actions ', () => {
    it('should return set the list of known Pizzas', () => {
      const pizzass = [
        createPizzas('PRODUCT-AAA'),
        createPizzas('PRODUCT-zzz')
      ];
      const action = new PizzasLoaded(pizzass);
      const result: PizzasState = pizzasReducer(initialState, action);
      const selId: string = getPizzasId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = pizzasReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
