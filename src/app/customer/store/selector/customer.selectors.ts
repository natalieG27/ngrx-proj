import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCustomer from '../reducer/customer.reducer';

export const selectCustomState = createFeatureSelector<fromCustomer.CustomerState>(
  fromCustomer.CustomerFeatureKey,
);

export const selectCustomer = createSelector(
  selectCustomerState,
  (state: fromCustomer.CustomerState) => state.customers
);
