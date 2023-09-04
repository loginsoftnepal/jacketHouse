import { HomeSection, Product } from '@prisma/client'

export type ErrorResponse = {
  status: string
  message: string
}

export type HomeSectionListResponse = {
  status: string
  message: string
  homeSection: HomeSection[]
}

export type HomeSectionResponse = {
  status: string
  data: { homeSection: HomeSection }
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

export async function apiCreateHomeSection(
  homeSectionData: any,
): Promise<HomeSection> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/product/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: homeSectionData,
  })

  return handleResponse<HomeSectionResponse>(response).then(
    (data) => data.data.homeSection,
  )
}

export async function apiUpdateHomeSection(
  homeSectionData: any,
): Promise<HomeSection> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/homeSection`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: homeSectionData,
  })

  return handleResponse<HomeSectionResponse>(response).then(
    (data) => data.data.homeSection,
  )
}

export async function apiFetchHomeSection():Promise<HomeSection[]> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/homeSection`)
  return handleResponse<HomeSectionListResponse>(response).then((data) => data.homeSection)
} 

export async function apiDeleteHomeSection(homeSectionId: number):Promise<void> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/homeSection/${homeSectionId}`, {
     method: 'DELETE',
  })

  if(response.status !== 204) {
    const errorResponse: ErrorResponse = await response.json();
    if(errorResponse) {
      throw new Error(errorResponse.message)
    } else {
       throw new Error(`API-Error: ${response.status}`)
    }
  }
}