import { ThunkAction } from 'redux-thunk'
import { PricingData } from '../models'
import { Server, ValidationError, ServerResponse } from '../data'
import { AppState } from '../store'
import { 
  REQUEST_PRICING_DATA, RECEIVE_PRICING_DATA, RESET_ERROR,
  RequestPricingData, ReceivePricingData, ResetError, Action
} from './types'

const requestPricingData: RequestPricingData = {
  type: REQUEST_PRICING_DATA
}

const receivePricingData = (data: PricingData, error: ValidationError): ReceivePricingData => ({
  type: RECEIVE_PRICING_DATA,
  data,
  error,
})

const call = (operation: () => Promise<ServerResponse>): ThunkAction<void, AppState, null, Action> => {
  return async dispatch => {
    dispatch(requestPricingData)
    const response = await operation()
    dispatch(receivePricingData(response.data, response.error))
  }
}

export const fetchPricingData = () => call(Server.fetchPricingData)
export const applyPromoCode = (code: string) => call(() => Server.applyPromoCode(code))
export const resetError = (): ResetError => ({ type: RESET_ERROR })