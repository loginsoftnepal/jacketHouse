import { ProductType } from '@/section/AdminProductEdit/AdminProductEdit'
import { Product } from '@prisma/client'

export type SessionByDevice = {
  dimensionValues: { value: any }[]
  metricValues: { value: any }[]
}

export type OrderType = {
  id: number | string
  city: string
  country: string
  line1: string
  line2: string
  province: string
  postalCode: string
  payment_status: string
  deliveredDate: string | Date
  email: string
  phone: string
  purchasedDate: string | Date
  orderStatus: string
  total: string | number
  subtotal: string | number
  userId: number | string
  username: string
  deliveryAmount: number | string
  products: ProductType[]
}

export interface fileListType {
  uid: number | undefined,
  name: string,
  status: string,
  url: string
}