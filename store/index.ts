import { isLoadingReducer, pricingDataReducer, errorReducer } from './reducers'
import { combineReducers } from 'redux'

export * from './AppState'

export const rootReducer = combineReducers({
  isLoading: isLoadingReducer,
  pricingData: pricingDataReducer,
  error: errorReducer,
})