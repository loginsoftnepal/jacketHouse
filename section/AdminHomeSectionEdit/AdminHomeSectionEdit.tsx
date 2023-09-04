import { IHomeSection } from '@/app/admin/home/homeSection/page'
import InputField from '@/components/InputField/InputField'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Select, Space, message } from 'antd'
import type { SelectProps } from 'antd'
import AdminUploadPhoto from '../AdminUploadPhoto/AdminUploadPhoto'
import { apiCreateHomeSection, apiUpdateHomeSection } from '@/app/api-request/homeSectionCalls'
import { useStore } from '@/store/useStore'
import { IProduct } from '@/store/slice/productSlice'


const handleChange = (value: string[]) => {
  console.log(`selected ${value}`)
}

export interface SectionEditProps {
  url: string
  method: string
  updateData?: IHomeSection
}


const AdminHomeSectionEdit = (props: SectionEditProps) => {
  const { url, method } = props
  const { products, setProducts, fetchProducts } = useStore()
  const [isCreated, setIsCreated] = useState(false)
  const [selectProduct, setSelectProduct] = useState<SelectProps['options']>([])
  const [dataValues, setDataValues] = useState<IHomeSection>({
    title: '',
    subtitle: '',
    products: [],
  })

  useEffect(() => {
    if (props.updateData) {
      setDataValues(props.updateData)
      setIsCreated(true)
    }
  }, [])

  useEffect(() => {
     const result = products.map((data: IProduct) => {
      return {
         value: data.id,
          label: data.title
        }
       }
      )
    setSelectProduct(result)
  }, [products])

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/product`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok')
        }
        return res.json()
      })
      .then((data) => {
        console.log(data)
        setProducts(data.products)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const handleSubmit = async () => {
    if (!dataValues.title || !dataValues.subtitle) {
      return message.error('please fill all the fields.')
    }

    const homeSectionData = JSON.stringify(dataValues)

    try {
      const homeSectionValues =
        method == 'POST'
          ? await apiCreateHomeSection(homeSectionData)
          : await apiUpdateHomeSection(homeSectionData)
      message.success('Product created successfully.')
      setDataValues(homeSectionValues)
      setIsCreated(true)
    } catch (error: any) {
      message.error(error.toString())
      console.log(error)
    }
  }

  return (
    <div>
      {isCreated && (
        <div>
          <AdminUploadPhoto
            action={`/api/homeSection/${dataValues.id}/upload`}
            listType="picture-card"
            name="productPhoto"
            multiple={true}
          />
        </div>
      )}
      <div style={{ display: 'flex' }}>
        <InputField
          inputValue={dataValues}
          setInputValue={setDataValues}
          name="title"
          type="text"
          placeholder="Enter Title..."
          label="Section Title"
        />

        <InputField
          inputValue={dataValues}
          setInputValue={setDataValues}
          name="subtitle"
          type="text"
          placeholder="Enter Subtitle..."
          label="Subtitle"
        />
      </div>
      <div style={{ display: 'flex' }}>
        <Space style={{ width: '100%' }} direction="vertical">
          <Select
            mode="multiple"
            allowClear
            style={{ width: '100%', height: '25px' }}
            onChange={handleChange}
            options={selectProduct}
            placeholder="Please Select product"
          />
        </Space>
      </div>

      <button
        onClick={() => handleSubmit()}
        className="text-white p-2 rounded-3xl border-2 border-white m-2"
      >
        {props.method == 'POST' ? 'Add' : 'Update'}
      </button>
    </div>
  )
}

export default AdminHomeSectionEdit
