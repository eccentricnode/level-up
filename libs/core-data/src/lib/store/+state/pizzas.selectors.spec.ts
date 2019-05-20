import { Entity, PizzasState } from './pizzas.reducer';
import { pizzasQuery } from './pizzas.selectors';

describe('Pizzas Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getPizzasId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createPizzas = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      pizzas: {
        list: [
          createPizzas('PRODUCT-AAA'),
          createPizzas('PRODUCT-BBB'),
          createPizzas('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Pizzas Selectors', () => {
    it('getAllPizzas() should return the list of Pizzas', () => {
      const results = pizzasQuery.getAllPizzas(storeState);
      const selId = getPizzasId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedPizzas() should return the selected Entity', () => {
      const result = pizzasQuery.getSelectedPizzas(storeState);
      const selId = getPizzasId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = pizzasQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = pizzasQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
