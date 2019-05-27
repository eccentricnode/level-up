import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BRANDS_FEATURE_KEY, BrandsState } from './brands.reducer';

// Lookup the 'Brands' feature state managed by NgRx
const getBrandsState = createFeatureSelector<BrandsState>(BRANDS_FEATURE_KEY);

const getLoaded = createSelector(
  getBrandsState,
  (state: BrandsState) => state.loaded
);
const getError = createSelector(
  getBrandsState,
  (state: BrandsState) => state.error
);

const getAllBrands = createSelector(
  getBrandsState,
  getLoaded,
  (state: BrandsState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getBrandsState,
  (state: BrandsState) => state.selectedId
);
const getSelectedBrands = createSelector(
  getAllBrands,
  getSelectedId,
  (brands, id) => {
    const result = brands.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const brandsQuery = {
  getLoaded,
  getError,
  getAllBrands,
  getSelectedBrands
};
