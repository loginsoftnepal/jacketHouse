"use client"
import AdminProductSectionEdit from '@/section/AdminProductEdit/AdminProductEdit'
import { Product } from '@/store/slice/productSlice'
import { useStore } from '@/store/useStore'
import { Image, message, Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import React, { useContext, useEffect, useState } from 'react'

interface DataType {
  key: string
  title: string
  collection: string
}

const AdminHomeSection = () => {
  let url = `/contact`
  const { setTopSheet, setTopSheetContent, fetchProducts, products } = useStore()
  
  const tableItemEdit = (record: any) => {}

  useEffect(() => {
     fetchProducts()
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

  const columns: ColumnsType<DataType | Product> = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text: string, record: any) => (
        <div className="category-table-name">{text}</div>
      ),
    },

    {
      title: 'Collection',
      dataIndex: 'collection',
      key: 'collection',
      responsive: ['lg'],
    },

    {
      title: 'View',
      key: 'view',
      render: (record: any) => (
        <button
          className="np-admin-main-button"
          onClick={() => {
            setTopSheetContent(
              <AdminProductSectionEdit method="PUT" url={url} />,
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
          className="np-admin-main-button"
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
            setTopSheetContent(<AdminProductSectionEdit url={url} method='POST' />)
            setTopSheet(true)
          }}
        >
          Add Product
        </button>
        <Table dataSource={[]} columns={columns} />
      </div>
    </div>
  )
}

export default AdminHomeSection
