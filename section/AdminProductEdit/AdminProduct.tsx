'use client'
import AdminProductSectionEdit from '@/section/AdminProductEdit/AdminProductEdit'
import { IProduct } from '@/store/slice/productSlice'
import { useStore } from '@/store/useStore'
import { Product } from '@prisma/client'
import { Image, message, Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import React, { useContext, useEffect, useState } from 'react'

interface DataType {
  key: string
  title: string
  category: string
}

interface ProductSectionData {
    productData: Product[];
}

const AdminProductSection = ({ productData }: ProductSectionData) => {
  let url = `/api/product`
  const { setTopSheet, setTopSheetContent, products } = useStore()
  const [product, setProduct] = useState<Product[]>([])


  useEffect(() => {
     console.log(productData);
     setProduct(productData);
  }, [])

  const tableItemDelete = async (record: any) => {
    try {
      const res = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: record.id }),
      })
      const data = await res.json()
      if (res.status == 200 || res.status == 201) {
        return message.success(data.message)
      }

      return message.error(data.message)
    } catch (error) {
      message.error(`Deleting Failed!`)
    }
  }

  const columns: ColumnsType<Product> = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text: string, record: any) => (
        <div className="category-table-name">{text}</div>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (text: string, record: any) => (
         <div>{text}</div>
      )
    },
    {
      title: 'View',
      key: 'view',
      render: (record: any) => (
        <button
          className="font-semibold p-2 rounded-3xl border-[1px] border-black"
          onClick={() => {
            setTopSheetContent(
              <AdminProductSectionEdit
                updateData={record}
                method="PUT"
                url={url}
              />,
            )
            setTopSheet(true)
          }}
        >
          View
        </button>
      ),
    },
    {
      title: 'Delete',
      key: 'delete',
      render: (record: any) => (
        <button
          className="font-semibold p-2 rounded-3xl border-[1px] border-black"
          onClick={() => tableItemDelete(record)}
        >
          Delete
        </button>
      ),
    },
  ]

  return (
    <div className="admin-store-category">
      <div className="page-heading">
        <button
          className="text-white p-2 border-2 m-2 border-white rounded-3xl"
          onClick={() => {
            setTopSheetContent(
              <AdminProductSectionEdit url={url} method="POST" />,
            )
            setTopSheet(true)
          }}
        >
          Add Product 
        </button>
        <Table
          dataSource={product}
          columns={columns}
          rowKey={(record) => `${record.id}`}
        />
      </div>
    </div>
  )
}

export default AdminProductSection
