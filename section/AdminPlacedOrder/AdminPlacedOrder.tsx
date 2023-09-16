'use client'
import { Image, message, Table } from 'antd'
import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import AdminPlacedOrdersEdit from './AdminPlacedOrderEdit'
import { ColumnsType } from 'antd/es/table'
import { useStore } from '@/store/useStore'
import { Order } from '@prisma/client'
import { OrderType } from '@/type/types'

interface DataType {
  key: string
  orderId: number
  orderDate: Date
}

interface IAdminPlacedOrders {
  placedOrder: OrderType[]
}

const AdminPlacedOrders = ({ placedOrder }: IAdminPlacedOrders) => {
  const server = `http://localhost:3000`
  let url = `${server}/sales`
  let url2 = `${server}/sales/status`

  const { setTopSheetContent, setTopSheet } = useStore()

  //   useEffect(() => {
  //        const failed = placedOrder &&  placedOrder.filter((order) => ((order.status == null) || (order.status == 'readyToShip')) && (order.payment_status === "paid")).sort((a, b) => b.id - a.id);
  //        setCurrentOrder(failed);
  //   }, [placedOrder]);

  const tableItemDelete = async (record: any) => {
    try {
      const res = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ orderId: record.id }),
      })
      const data = await res.json()
      if (res.status == 200 || res.status == 201) {
        // let boardf = await fetchPlacedOrder(adminAccessToken);
        // setPlacedOrder(boardf);
        return message.success(data.message)
      }
      return message.error(data.message)
    } catch (error) {
      message.error(`Deleting Failed!`)
    }
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'OrderId',
      dataIndex: 'id',
      key: 'orderId',
      render: (text: string, record: any) => (
        <div className="category-table-name">{text}</div>
      ),
    },
    {
      title: 'Order Date',
      dataIndex: 'purchasedDate',
      key: 'orderDate',
      render: (text: string, record: any) => (
        <div className="category-table-name">
          {new Date(text).toDateString()}
        </div>
      ),
      responsive: ['lg'],
    },

    {
      title: 'View',
      key: 'edit',
      render: (text: string, record: any) => (
        <button
          className="np-admin-main-button"
          onClick={() => {
            setTopSheetContent(
              <AdminPlacedOrdersEdit
                method="PUT"
                updateData={placedOrder.find((data) => data.id == record.id)}
                url={url2}
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
      render: (text, record) => (
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
        <Table dataSource={[]} columns={columns} />
      </div>
    </div>
  )
}

export default AdminPlacedOrders
