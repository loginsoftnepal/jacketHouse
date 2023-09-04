import { Product } from '@prisma/client'

export type ErrorResponse = {
  status: string
  message: string
}

export type ProductListResponse = {
  status: string
  message: string
  products: Product[]
}

export type ProductResponse = {
  status: string
  data: { product: Product }
}

const SERVER_ENDPOINT = process.env.SERVER_URL || 'http://localhost:3000'

async function handleResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get('Content-Type') || ''
  const isJson = contentType.includes('application/json')
  const data = isJson ? await response.json() : await response.text()

  if (!response.ok) {
    const message = isJson
      ? data.message || response.statusText
      : response.statusText
    throw new Error(message)
  }

  return data as T
}

export async function apiCreateProduct(productData: any): Promise<Product> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/product/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: productData,
  })

  return handleResponse<ProductResponse>(response).then(
    (data) => data.data.product,
  )
}

export async function apiUpdateProduct(productData: any): Promise<Product> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/product/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: productData,
  })

  return handleResponse<ProductResponse>(response).then(
    (data) => data.data.product,
  )
}

export async function apiFetchSingleProduct(
  productId: number,
): Promise<Product> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/product/${productId}`)
  return handleResponse<ProductResponse>(response).then(
    (data) => data.data.product,
  )
}

export async function apiFetchProducts(
  page: number,
  limit: number,
): Promise<Product[]> {
  const response = await fetch(
    `${SERVER_ENDPOINT}/api/product?page=${page}&limit=${limit}`,
  )
  return handleResponse<ProductListResponse>(response).then(
    (data) => data.products,
  )
}

export async function apiDeleteProduct(productId: number): Promise<void> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/product/${productId}`, {
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
