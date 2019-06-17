import { PricingData } from '../models'
import { ValidationError } from './ValidationError'

export interface ServerResponse {
  data: PricingData
  error?: ValidationError
}