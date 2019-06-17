import { PricingData } from '../models'
import { ValidationError } from '../data'

export interface AppState {
  isLoading: boolean
  pricingData?: PricingData
  error?: ValidationError
}