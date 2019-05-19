import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FRUITS_FEATURE_KEY, FruitsState } from './fruits.reducer';

// Lookup the 'Fruits' feature state managed by NgRx
const getFruitsState = createFeatureSelector<FruitsState>(FRUITS_FEATURE_KEY);

const getLoaded = createSelector(
  getFruitsState,
  (state: FruitsState) => state.loaded
);
const getError = createSelector(
  getFruitsState,
  (state: FruitsState) => state.error
);

const getAllFruits = createSelector(
  getFruitsState,
  getLoaded,
  (state: FruitsState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getFruitsState,
  (state: FruitsState) => state.selectedId
);
const getSelectedFruits = createSelector(
  getAllFruits,
  getSelectedId,
  (fruits, id) => {
    const result = fruits.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const fruitsQuery = {
  getLoaded,
  getError,
  getAllFruits,
  getSelectedFruits
};
