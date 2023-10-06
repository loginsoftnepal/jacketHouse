import { Category } from "@prisma/client";

const SERVER_ENDPOINT = process.env.SERVER_URL || 'http://localhost:3000'

export type ErrorResponse = {
    status: string;
    message: string;
}

export type CategoryListResponse = {
    status: string;
    data: Category[]
}

export type CategoryResponse = {
    status: string
    data: { category: Category }
}

async function handleResponse<T>(response: Response): Promise<T> {
    const contentType = response.headers.get('Content-Type')
    const isJson = contentType?.includes('application/json')
    const data = isJson ? await response.json() : await response.text()

    if(!response.ok) {
        const message = isJson ? data.message || response.statusText : response.statusText
        throw new Error(message)
    }

    return data as T
}

export async function apiCreateCategory(categoryData: any): Promise<Category> {
   const response = await fetch(`${SERVER_ENDPOINT}/api/category`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: categoryData,
   })

   return handleResponse<CategoryResponse>(response).then((data) => data.data.category);
}

export async function apiUpdateCategory(categoryData: any, id: number): Promise<Category> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/category/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: categoryData,
  })

  return handleResponse<CategoryResponse>(response).then((data) => data.data.category)
}

export async function apiFetchCategory(): Promise<Category[]> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/category`)

  return handleResponse<CategoryListResponse>(response).then((data) => data.data)
}

export async function apiDeleteCategory(categoryId: number): Promise<void> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/category/${categoryId}`, {
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
