import AdminCategorySection from '@/section/AdminCategory/AdminCategorySection'
import React from 'react'

const getCategorySection = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/api/category`, { cache: 'no-store'})

  if(!res.ok) {
    throw new Error('Failed to fetch category')
  }
  return res.json();
}

const AdminCategory = async() => {
  const getData = await getCategorySection();
  return (
    <div>
      <AdminCategorySection categoryData={getData.category} />
    </div>
  )
}

export default AdminCategory
