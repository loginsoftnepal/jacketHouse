import { existsSync } from 'fs'
import { join } from 'path'
import fs, { writeFile } from 'fs/promises'

export const uploadPhoto = async (file: File, dest: string) => {
  try {
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    await writeFile(dest, buffer)
  } catch (error) {
    throw new Error('failed to save file.')
  }
}
