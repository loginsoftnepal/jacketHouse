import { Order } from '@prisma/client'

const SERVER_ENDPOINT = process.env.SERVER_URL || 'http://localhost:3000'

export type ErrorResponse = {
  status: string
  message: string
}

export type OrderListResponse = {
  status: string
  data: Order[]
}

export type OrderResponse = {
  status: string
  data: { order: Order }
}

async function handleResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get('Content-Type')
  const isJson = contentType?.includes('application/json')
  const data = isJson ? await response.json() : await response.text()

  if (!response.ok) {
    const message = isJson
      ? data.message || response.statusText
      : response.statusText
    throw new Error(message)
  }
  return data as T
}

export async function apiCreateOrder(orderData: any): Promise<Order> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/brand`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: orderData,
  })
  return handleResponse<OrderResponse>(response).then((data) => data.data.order)
}

export async function apiUpdateOrder(orderData: any): Promise<Order> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/order`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: orderData,
  })
  return handleResponse<OrderResponse>(response).then((data) => data.data.order)
}

export async function apiFetchOrdersByUserId(userId: number): Promise<Order[]> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/order/${userId}`)
  return handleResponse<OrderListResponse>(response).then((data) => data.data)
}

export async function apiFetchOrdersByStatus(status: string): Promise<Order[]> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/order?status=${status}`)
  return handleResponse<OrderListResponse>(response).then((data) => data.data)
}

export async function apiDeleteOrder(orderId: number): Promise<void> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/order/${orderId}`, {
    method: 'DELETE',
  })

  if (response.status !== 204) {
    const errorResponse: ErrorResponse = await response.json()
    if (errorResponse) {
      throw new Error(errorResponse.message)
    } else {
      throw new Error(`API-Error: ${response.status}`)
    }
  }
}
