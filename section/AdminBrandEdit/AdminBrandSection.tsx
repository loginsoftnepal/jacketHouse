"use client"
import { Brand } from "@prisma/client"
import { message } from "antd"
import Table, { ColumnsType } from "antd/es/table"
import { useEffect, useState } from "react"
import AdminBrandEdit from "./AdminBrandEdit"
import { useStore } from "@/store/useStore"

interface DataType {
    key: string
    title: string
    subtitle: string
}

export interface IBrandSection {
    id?: number
    title: string
}

interface BrandSectionData {
    brandSectionData: Brand[]
}

const AdminBrandSection = ({ brandSectionData }: BrandSectionData) => {

    let url = `/api/brand`;
    const { setTopSheetContent, setTopSheet } = useStore()
    const [brand, setBrand] = useState<Brand[]>([])

    useEffect(() => {
        setBrand(brandSectionData);
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

  const columns: ColumnsType<IBrandSection> = [
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
            setTopSheetContent(<AdminBrandEdit method="PUT" url={url} updateData={record} />)
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
            setTopSheetContent(<AdminBrandEdit method="POST" url={url}/>)
            setTopSheet(true)
          }}
        >
          Add Brand Section
        </button>
        <Table dataSource={brand} columns={columns} rowKey={(record) => `${record.id}`} />
      </div>
    </div>
  )
}

export default AdminBrandSection;