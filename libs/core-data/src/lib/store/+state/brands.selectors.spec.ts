import { Entity, BrandsState } from './brands.reducer';
import { brandsQuery } from './brands.selectors';

describe('Brands Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getBrandsId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createBrands = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      brands: {
        list: [
          createBrands('PRODUCT-AAA'),
          createBrands('PRODUCT-BBB'),
          createBrands('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Brands Selectors', () => {
    it('getAllBrands() should return the list of Brands', () => {
      const results = brandsQuery.getAllBrands(storeState);
      const selId = getBrandsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedBrands() should return the selected Entity', () => {
      const result = brandsQuery.getSelectedBrands(storeState);
      const selId = getBrandsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = brandsQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = brandsQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
