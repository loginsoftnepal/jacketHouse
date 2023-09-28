import AdminBrandSection from "@/section/AdminBrandEdit/AdminBrandSection";

const getBrandSection = async () => {
   const res = await fetch(`${process.env.SERVER_URL}/api/brand`, { cache: 'no-store'})
   
   if(!res.ok) {
     throw new Error('Failed to fetch home section.')
   }

   return res.json();
}

const AdminBrand = async () => {
  
  const getData = await getBrandSection();

  return (
    <AdminBrandSection brandSectionData={getData.brands} />
  )
}

export default AdminBrand
