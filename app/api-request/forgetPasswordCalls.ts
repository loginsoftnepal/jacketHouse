
export type ErrorResponse = {
    status: string
    message: string
}

export type ForgetPasswordRespose = {
     status: string
     message: string
}

async function handleResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get('Content-Type') || ''
  const isJson = contentType.includes('application/json');
  const data = isJson ? await response.json() : await response.text()

  if(!response.ok) {
    const message = isJson ? data.message || response.statusText : response.statusText
    throw new Error(message)
  }

  return data as T;
}

export async function apiForgetPassword(data: any): Promise<ForgetPasswordRespose> {
   
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/send-token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
     console.log(response);
    return handleResponse<ForgetPasswordRespose>(response).then((data) => data )
 }