import { Order, columns } from '@/section/OrderList/OrderListColumn'
import OrderList from '@/section/OrderList/OrderList'

export default async function DemoPage() {
  const data: Order[] = [
    {
      id: 1,
      status: 'processing',
      items: 2,
      amount: 2000,
      orderedDate: new Date(Date.now()).toDateString(),
    },
  ]

  return (
    <div className="container mx-auto py-10">
      <OrderList columns={columns} data={data} />
    </div>
  )
}
