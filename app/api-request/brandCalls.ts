import { Brand } from '@prisma/client'

const SERVER_ENDPOINT = process.env.SERVER_URL || 'http://localhost:3000'

export type ErrorResponse = {
  status: string
  message: string
}

export type BrandListResponse = {
  status: string
  data: Brand[]
}

export type BrandResponse = {
  status: string
  data: { brand: Brand }
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

export async function apiCreateBrand(brandData: any): Promise<Brand> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/brand`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: brandData,
  })

  return handleResponse<BrandResponse>(response).then((data) => data.data.brand)
}

export async function apiUpdateProduct(brandData: any): Promise<Brand> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/brand`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: brandData,
  })

  return handleResponse<BrandResponse>(response).then((data) => data.data.brand)
}

export async function apiFetchBrands(): Promise<Brand[]> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/brand`)

  return handleResponse<BrandListResponse>(response).then((data) => data.data)
}

export async function apiDeleteBrand(brandId: number): Promise<void> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/brand/${brandId}`, {
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
