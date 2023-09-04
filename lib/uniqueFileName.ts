import { v4 as uuidv4 } from 'uuid'

export const UniqueFileName = (originalFileName: string) => {
  const timestamp = Date.now()
  const randomString = uuidv4()

  const extension = originalFileName.split('.').pop()
  const uniqueName = `${timestamp}=${randomString}.${extension}`
  return { uniqueName, extension }
}
