export type ErrorResponse = {
  status: string
  message: string
}

export type Profile = {
  id: number
  username: string
  fullname: string
  email: string
  phone: string
  address1: string
  address2: string
}

export type ProfileResponse = {
  status: string
  profile: Profile
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

export async function apiUpdateProfile(profileData: any) {
  console.log(profileData);
  const response = await fetch(
    `${SERVER_ENDPOINT}/api/profile/${profileData.id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profileData.formData),
    },
  )

  return handleResponse<ProfileResponse>(response).then((data) => data.profile)
}

export async function apiGetProfile(userId: any) {
  const response = await fetch(`${SERVER_ENDPOINT}/api/profile/${userId}`, {
    method: 'GET',
  })

  return handleResponse<ProfileResponse>(response).then((data) => data.profile)
}
