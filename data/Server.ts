import { PricingData } from '../models'
import Decimal from 'decimal.js'
import { ValidationType, ValidationError } from './ValidationError'
import { ServerResponse } from './ServerResponse'

const delay = 2000
const itemPrice = new Decimal(115)

const mockData = (discount: number | undefined = undefined): PricingData => {
  const price = discount === undefined ? itemPrice : new Decimal(itemPrice.times(1 - discount))
  const tax = price.times(0.1)
  return { 
    summary: {
      subtotal: price,
      savings: price.times(0.05),
      discount: discount === undefined ? undefined : price.times(discount),
      tax: tax,
      total: price.plus(tax),
      zip: '85050',
    },
    item: {
      picture: 'https://i5.walmartimages.com/asr/f5a126f3-1ad7-47b5-b10b-d4ca1ef0dc6a_1.47abeca28f502947d1e538cf6ab02e5f.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF',
      name: 'Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red',
      quantity: 1,
      price: itemPrice,
    }
  }
}

const wait = async (): Promise<void> => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), delay)
  })
}

export class Server {
  static fetchPricingData = async (): Promise<ServerResponse> => {
    await wait()
    return { data: mockData() }
  }

  static applyPromoCode = async (code: string): Promise<ServerResponse> => {
    await wait()
    if (code.toLowerCase() == 'discount') {
      return { data: mockData(0.1) }
    } else {
      return { data: mockData(), error: new ValidationError('Bad promo code', ValidationType.PromoCode) }
    }
  }
}