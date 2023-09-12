
export type ErrorResponse = {
    status: string,
    message: string,
}

export type PasswordChangeResponse = {
    status: string,
    message: string,
}

async function handleResponse<T>(response: Response): Promise<T> {
    const contentType = response.headers.get('Content-Type') || ''
    const isJson = contentType.includes('application/json')
    const data = isJson ? await response.json() : await response.text()

    if(!response.ok) {
        const message = isJson ? data.message || response.statusText : response.statusText
        throw new Error(message);
    }

    return data as T
}

const SERVER_ENDPOINT = process.env.SERVER_URL || 'http://localhost:3000';

export async function apiUpdatePassword(settingData: any) {

    const response = await fetch(`${SERVER_ENDPOINT}/api/password-change/${settingData.id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(settingData.formData)
    })

    return handleResponse<PasswordChangeResponse>(response).then((data) => data)
}