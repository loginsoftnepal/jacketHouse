import AdminHomeSection from "@/section/AdminHomeSectionEdit/AdminHomeSection"

const getHomeSection = async () => {
   const res = await fetch(`${process.env.SERVER_URL}/api/homeSection`, { cache: 'no-store'})
   
   if(!res.ok) {
     throw new Error('Failed to fetch home section.')
   }

   return res.json();
}

const HomeSectionPage = async () => {

  const getData = await getHomeSection();

  return (
    <AdminHomeSection homeSectionData={getData.homeSection} />
  )
}

export default HomeSectionPage;
