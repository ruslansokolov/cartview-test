import { 
  Action, 
  REQUEST_PRICING_DATA, RECEIVE_PRICING_DATA, RESET_ERROR,
} from '../actions/types'
import { PricingData } from '../models'
import { ValidationError } from '../data'
 
export const isLoadingReducer = (state: boolean = false, action: Action) => {
  switch (action.type) {
    case REQUEST_PRICING_DATA:
      return true
    default:
      return false
  }
}

export const pricingDataReducer = (state: PricingData = null, action: Action) => {
  switch (action.type) {
    case RECEIVE_PRICING_DATA:
      return action.data
    default:
      return state
  }
}

export const errorReducer = (state: ValidationError = null, action: Action) => {
  switch (action.type) {
    case RECEIVE_PRICING_DATA:
      return action.error || null
    case RESET_ERROR:
      return null
    default:
      return state
  }
}