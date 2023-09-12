import { User } from '@prisma/client'

export type ErrorResponse = {
  status: string
  message: string
}

export type AvatarUploadResponse = {
  status: string
  updatedUser: User
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

export async function apiUploadAvatar(avatarData: any): Promise<User> {
  const formData = new FormData()
  formData.append('avatar', avatarData.file)
  const response = await fetch(
    `${SERVER_ENDPOINT}/api/user/${avatarData.id}/avatar`,
    {
      method: 'POST',
      body: formData,
    },
  )
  console.log('we are hered')
  return handleResponse<AvatarUploadResponse>(response).then(
    (data) => data.updatedUser,
  )
}
