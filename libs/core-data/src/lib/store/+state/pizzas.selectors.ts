import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PIZZAS_FEATURE_KEY, PizzasState } from './pizzas.reducer';

// Lookup the 'Pizzas' feature state managed by NgRx
const getPizzasState = createFeatureSelector<PizzasState>(PIZZAS_FEATURE_KEY);

const getLoaded = createSelector(
  getPizzasState,
  (state: PizzasState) => state.loaded
);
const getError = createSelector(
  getPizzasState,
  (state: PizzasState) => state.error
);

const getAllPizzas = createSelector(
  getPizzasState,
  getLoaded,
  (state: PizzasState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getPizzasState,
  (state: PizzasState) => state.selectedId
);
const getSelectedPizzas = createSelector(
  getAllPizzas,
  getSelectedId,
  (pizzas, id) => {
    const result = pizzas.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const pizzasQuery = {
  getLoaded,
  getError,
  getAllPizzas,
  getSelectedPizzas
};
