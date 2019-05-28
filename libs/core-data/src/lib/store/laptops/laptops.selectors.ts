import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LAPTOPS_FEATURE_KEY, LaptopsState } from './laptops.reducer';

// Lookup the 'Laptops' feature state managed by NgRx
const getLaptopsState = createFeatureSelector<LaptopsState>(
  LAPTOPS_FEATURE_KEY
);

const getLoaded = createSelector(
  getLaptopsState,
  (state: LaptopsState) => state.loaded
);
const getError = createSelector(
  getLaptopsState,
  (state: LaptopsState) => state.error
);

const getAllLaptops = createSelector(
  getLaptopsState,
  getLoaded,
  (state: LaptopsState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getLaptopsState,
  (state: LaptopsState) => state.selectedId
);
const getSelectedLaptops = createSelector(
  getAllLaptops,
  getSelectedId,
  (laptops, id) => {
    const result = laptops.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const laptopsQuery = {
  getLoaded,
  getError,
  getAllLaptops,
  getSelectedLaptops
};
