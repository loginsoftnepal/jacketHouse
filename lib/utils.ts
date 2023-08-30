import { type ClassValue, clsx } from 'clsx'
import { unlink } from 'fs'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function deletePhoto (path: string) {
    await unlink(path, (err) => {
      if(err) {
        console.log(err);
        return err
      }
    })
}