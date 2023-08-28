import { useEffect } from 'react'
import { useState } from 'react'
import { Pie } from '@ant-design/plots'
import { SessionByDevice } from '@/type/types'

export type myDeviceType = {
  type: any
  value: number
}
const DeviceChart = () => {
  //   const authContextData = useContext<createAuthContextProps | null>(AuthContext);
  const [sessionsByDevice, setSessionsByDevice] = useState<SessionByDevice[]>(
    [],
  )
  const [myDevice, setMyDevice] = useState<myDeviceType[]>([])
  const [customColors] = useState([
    '#F11A7B',
    '#982176',
    '#3E001F',
    '#FFE5AD',
    '#FFE5AD',
    '#F31559',
  ])
  const config = {
    appendPadding: 10,
    data: myDevice,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
      style: {
        fill: '#fff',
      },
    },
    interactions: [
      {
        type: 'pie-legend-active',
      },
      {
        type: 'element-active',
      },
    ],
  }

  useEffect(() => {
    if (sessionsByDevice && sessionsByDevice?.length > 0) {
      const newArr = sessionsByDevice.map((pg: any) => {
        return {
          type: pg.dimensionValues[0].value.toUpperCase(),
          value: parseInt(pg.metricValues[0].value),
        }
      })
      setMyDevice([...newArr])
    }
  }, [sessionsByDevice, sessionsByDevice?.length])
  return (
    <>
      <div className="custom-pie-chart">
        {myDevice && myDevice.length > 0 ? (
          <Pie color={customColors} {...config} />
        ) : null}{' '}
      </div>
    </>
  )
}

export default DeviceChart
