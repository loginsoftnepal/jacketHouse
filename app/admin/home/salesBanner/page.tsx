'use client'

import AdminUploadPhoto from '@/section/AdminUploadPhoto/AdminUploadPhoto'

function GalleryList() {
  return (
    <AdminUploadPhoto
      action={`api/salesBanner`}
      listType="picture-card"
      name="salesBanner"
      multiple={false}
    />
  )
}

export default GalleryList