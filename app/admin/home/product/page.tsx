import AdminProductSection from '@/section/AdminProductEdit/AdminProduct'
import AdminProductSectionEdit from '@/section/AdminProductEdit/AdminProductEdit'
import { IProduct } from '@/store/slice/productSlice'
import { useStore } from '@/store/useStore'
import { Image, message, Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import React, { useContext, useEffect, useState } from 'react'

const getProducts = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/api/product`, { cache: 'no-store'})
  console.log(res.json);
  if(!res.ok) {
    throw new Error('failed to fetch products.');
  }

  return res.json();
}


const AdminProductPage = async () => {
 
  const getData = await getProducts();

  return(
    <AdminProductSection productData={getData.products} />
  )
}

export default AdminProductPage
