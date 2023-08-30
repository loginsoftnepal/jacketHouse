import { unlink } from 'fs'
export async function deletePhoto(path: string) {
  await unlink(path, (err) => {
    if (err) {
      console.log(err)
      return err
    }
  })
}
