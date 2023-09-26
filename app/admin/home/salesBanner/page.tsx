import AdminUploadPhoto from '@/section/AdminUploadPhoto/AdminUploadPhoto'

const getSalesBanner = async () => {
  const response = await fetch(`${process.env.SERVER_URL}/api/salesBanner`, { cache: 'no-cache'})
  if(!response.ok) {
    throw new Error('Failed to fetch data.')
  }
  return response.json();
}

async function GalleryList() {

  const getData = await getSalesBanner();
  const fileList = getData.salesBanner.map((banner: any) => {
    return {
      uid: banner.id,
      name: banner.fileName,
      status: 'done',
      url: `${process.env.SERVER_URL}/api/file/salesBanner?filename=${banner.fileName}`,
    }
  });

  return (
    <AdminUploadPhoto
      fetchedFileList={fileList}
      action={`api/salesBanner`}
      listType="picture-card"
      name="salesBanner"
      multiple={false}
    />
  )
}

export default GalleryList
