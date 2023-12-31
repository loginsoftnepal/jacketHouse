'use client'
import { useStore } from '@/store/useStore'
import { Image, message, Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import React, { useContext, useEffect, useState } from 'react'
import AdminCategoryEdit from './AdminCategoryEdit'
import { Category } from '@prisma/client'

interface DataType {
  key: string
  title: string
  collection: string
}

export interface ICategorySection {
  id?: number
  title: string
}

interface CategorySectionData {
  categoryData: Category[]
}

const AdminCategorySection = ({ categoryData }: CategorySectionData) => {
  let url = `/api/category`
  const [category, setCategory] = useState<Category[]>([])
  const { setTopSheetContent, setTopSheet } = useStore()
   
  useEffect(() => {
    setCategory(categoryData);
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

  const columns: ColumnsType<ICategorySection> = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text: string, record: any) => (
        <div className="category-table-name">{text}</div>
      ),
    },
    {
      title: 'View',
      key: 'view',
      render: (record: any) => (
        <button
          className="np-admin-main-button"
          onClick={() => {
            setTopSheetContent(<AdminCategoryEdit method="PUT" url={url} updateData={record} />)
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
            setTopSheetContent(<AdminCategoryEdit method="POST" url={url} />)
            setTopSheet(true)
          }}
        >
          Add Category
        </button>{' '}
        <Table dataSource={category} columns={columns} rowKey={(record) => `${record.id}`} />
      </div>
    </div>
  )
}

export default AdminCategorySection
