'use client'

import AdminUploadPhoto from '@/section/AdminUploadPhoto/AdminUploadPhoto'

function GalleryList() {
  return (
    <AdminUploadPhoto
      action={`api/heroBanner`}
      listType="picture-card"
      name="heroBanner"
      multiple={true}
    />
  )
}

export default GalleryList
