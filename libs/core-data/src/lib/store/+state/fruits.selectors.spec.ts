import { Entity, FruitsState } from './fruits.reducer';
import { fruitsQuery } from './fruits.selectors';

describe('Fruits Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getFruitsId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createFruits = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      fruits: {
        list: [
          createFruits('PRODUCT-AAA'),
          createFruits('PRODUCT-BBB'),
          createFruits('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Fruits Selectors', () => {
    it('getAllFruits() should return the list of Fruits', () => {
      const results = fruitsQuery.getAllFruits(storeState);
      const selId = getFruitsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedFruits() should return the selected Entity', () => {
      const result = fruitsQuery.getSelectedFruits(storeState);
      const selId = getFruitsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = fruitsQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = fruitsQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
