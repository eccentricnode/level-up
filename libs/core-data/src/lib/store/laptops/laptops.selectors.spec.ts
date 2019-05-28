import { Entity, LaptopsState } from './laptops.reducer';
import { laptopsQuery } from './laptops.selectors';

describe('Laptops Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getLaptopsId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createLaptops = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      laptops: {
        list: [
          createLaptops('PRODUCT-AAA'),
          createLaptops('PRODUCT-BBB'),
          createLaptops('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Laptops Selectors', () => {
    it('getAllLaptops() should return the list of Laptops', () => {
      const results = laptopsQuery.getAllLaptops(storeState);
      const selId = getLaptopsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedLaptops() should return the selected Entity', () => {
      const result = laptopsQuery.getSelectedLaptops(storeState);
      const selId = getLaptopsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = laptopsQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = laptopsQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
