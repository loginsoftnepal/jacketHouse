'use client'
import AdminHomeSectionEdit from '@/section/AdminHomeSectionEdit/AdminHomeSectionEdit'
import { IProduct } from '@/store/slice/productSlice'
import { useStore } from '@/store/useStore'
import { HomeSection } from '@prisma/client'
import { Image, message, Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import React, { useContext, useEffect, useState } from 'react'

interface DataType {
  key: string
  title: string
  subtitle: string
}

export interface IHomeSection {
  id?: number
  title: string
  subtitle: string | null    
  products?: IProduct[] | string[] | number[]
  fileName?: string | null
  path?: string | null
}

interface HomeSectionData {
    homeSectionData: HomeSection[]
}
const AdminHomeSection = ({ homeSectionData }: HomeSectionData) => {

  let url = `/api/homeSection`
  const { setTopSheetContent, setTopSheet } = useStore()
  const [homeSection, setHomeSection] = useState<HomeSection[]>([])

  useEffect(() => {
    setHomeSection(homeSectionData);
  }, [])

  const tableItemEdit = (record: any) => {}

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

  const columns: ColumnsType<IHomeSection> = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text: string, record: any) => (
        <div className="category-table-name">{text}</div>
      ),
    },

    {
      title: 'Subtitle',
      dataIndex: 'subtitle',
      key: 'subtitle',
      render: (text: string, record: any) => (
        <div className="category-table-name">{text}</div>
      )
    },

    {
      title: 'View',
      key: 'view',
      render: (record: any) => (
        <button
          className="np-admin-main-button"
          onClick={() => {
            setTopSheetContent(<AdminHomeSectionEdit method="PUT" url={url} updateData={record} />)
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
            setTopSheetContent(<AdminHomeSectionEdit method="POST" url={url} />)
            setTopSheet(true)
          }}
        >
          Add Home Section
        </button>
        <Table dataSource={homeSection} columns={columns} rowKey={(record) => `${record.id}`} />
      </div>
    </div>
  )
}

export default AdminHomeSection

