import { SessionByDevice } from '@/type/types'
import { Table } from 'antd'
import { useEffect } from 'react'
import { useState } from 'react'

type myPageType = {
  page: any
  views: any
}

const PagesView = () => {
  const [myViews, setMyViews] = useState<myPageType[]>([])
  const [pageViews, setPageViews] = useState<SessionByDevice[]>([])
  // console.log(pageViews, "pageViews")
  useEffect(() => {
    if (pageViews && pageViews.length > 0) {
      const newArr = pageViews.map((pg) => {
        return {
          page: pg.dimensionValues[0].value,
          views: pg.metricValues[0].value,
        }
      })
      setMyViews([...newArr])
    }
  }, [pageViews, pageViews?.length])
  const columns = [
    {
      title: 'Page Name',
      dataIndex: 'page',
      key: 'page',
      render: (text: string) => (
        <div className="category-table-name">{text}</div>
      ),
    },

    {
      title: 'Views',
      dataIndex: 'views',
      key: 'views',
    },
  ]
  return (
    <div>
      <Table
        dataSource={myViews}
        columns={columns}
        pagination={{ pageSize: 5 }}
      />
    </div>
  )
}

export default PagesView
