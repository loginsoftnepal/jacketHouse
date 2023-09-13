'use client'
import {
  apiCreateProduct,
  apiUpdateProduct,
} from '@/app/api-request/productCalls'
import InputField from '@/components/InputField/InputField'
import { Product } from '@prisma/client'
import { message, Select } from 'antd'
import { RcFile } from 'antd/es/upload'
import React, { useEffect } from 'react'
import { useState } from 'react'
import AdminUploadPhoto from '../AdminUploadPhoto/AdminUploadPhoto'

export interface SectionEditProps {
  url: string
  method: string
  updateData?: Product
}

export interface ProductType {
  id?: number
  title: string
}

const AdminCategoryEdit = (props: SectionEditProps) => {
  const { url, method } = props
  const [isCreated, setIsCreated] = useState(false)

  const [dataValues, setDataValues] = useState<ProductType>({
    title: '',
  })

  useEffect(() => {
    if (props.updateData) {
      setDataValues(props.updateData)
      setIsCreated(true)
    }
  }, [])
  const handleSubmit = async () => {
    console.log(dataValues)
    if (!dataValues.title) {
      return message.error('Please fill all the fields.')
    }

    const productData = JSON.stringify(dataValues)

    try {
      const product =
        method == 'POST'
          ? await apiCreateProduct(productData)
          : await apiUpdateProduct(productData)
      message.success('Product created successfully.')
      setDataValues(product)
      setIsCreated(true)
    } catch (error: any) {
      message.error(error.toString())
      console.log(error)
    }
  }

  return (
    <>
      {isCreated && (
        <div>
          <AdminUploadPhoto
            action={`/api/brand/${dataValues.id}/upload`}
            listType="picture-card"
            name="productPhoto"
            multiple={false}
            productId={dataValues.id}
          />
        </div>
      )}
      <div>
        <div style={{ display: 'flex' }}>
          <InputField
            inputValue={dataValues}
            setInputValue={setDataValues}
            name="title"
            type="text"
            placeholder="Enter Category Name..."
            label="Category Name"
          />
        </div>

        <button
          className="text-white p-2 rounded-3xl border-2 border-white m-2"
          onClick={() => handleSubmit()}
        >
          {props.method == 'POST' ? 'Add' : 'Update'}
        </button>
      </div>
    </>
  )
}

export default AdminCategoryEdit
