import { PricingData } from '../models'
import { ValidationError } from '../data'

export const REQUEST_PRICING_DATA = 'REQUEST_PRICING_DATA'
export const RECEIVE_PRICING_DATA = 'RECEIVE_PRICING_DATA'
export const RESET_ERROR = 'RESET_ERROR'

export interface RequestPricingData {
  type: typeof REQUEST_PRICING_DATA
}

export interface ReceivePricingData {
  type: typeof RECEIVE_PRICING_DATA
  data: PricingData,
  error?: ValidationError,
}

export interface ResetError {
  type: typeof RESET_ERROR
}

export type Action = 
  RequestPricingData | 
  ReceivePricingData |
  ResetError