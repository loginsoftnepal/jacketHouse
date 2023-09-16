import AdminUploadPhoto from '@/section/AdminUploadPhoto/AdminUploadPhoto'


const getHeroBanner = async () => {
  const response = await fetch(`${process.env.SERVER_URL}/api/heroBanner`, {
    method: 'GET',
  })

  if (!response.ok) {
    throw new Error('Failed to fetch data.')
  }

  return response.json()
}

async function GalleryList() {
 
const getData = await getHeroBanner();
const fileList = getData.heroBanner.map((banner: any) => {
     return {
      uid: banner.id,
      name: banner.fileName,
      status: 'done',
      url: `${process.env.SERVER_URL}/api/file/heroBanner?filename=${banner.fileName}`,
     }
})
  return (
    <AdminUploadPhoto
      fetchedFileList={fileList}
      action={`api/heroBanner`}
      listType="picture-card"
      name="heroBanner"
      multiple={true}
    />
  )
}

export default GalleryList
