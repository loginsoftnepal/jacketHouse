'use client'
import {
  apiCreateProduct,
  apiUpdateProduct,
} from '@/app/api-request/productCalls'
import InputField from '@/components/InputField/InputField'
import { Brand, Product } from '@prisma/client'
import { message, Select } from 'antd'
import { RcFile } from 'antd/es/upload'
import React, { useEffect } from 'react'
import { useState } from 'react'
import AdminUploadPhoto from '../AdminUploadPhoto/AdminUploadPhoto'
import { IBrandSection } from './AdminBrandSection'
import { apiCreateBrand, apiUpdateBrand } from '@/app/api-request/brandCalls'

export interface SectionEditProps {
  url: string
  method: string
  updateData?: Brand
}

const AdminBrandEdit = (props: SectionEditProps) => {
  const { url, method } = props
  const [dataValues, setDataValues] = useState<IBrandSection>({
    title: ''
  })

  useEffect(() => {
    if (props.updateData) {
      setDataValues(props.updateData)
    }
  }, [])

  const handleSubmit = async () => {
    console.log(dataValues)
    if (!dataValues.title) {
      return message.error('Please fill all the fields.')
    }

    const brandData = JSON.stringify(dataValues)

    try {
      const brand =
        method == 'POST'
          ? await apiCreateBrand(brandData)
          : await apiUpdateBrand(brandData, dataValues.id! )
      message.success('Brand created successfully.')
      setDataValues(brand)
    } catch (error: any) {
      message.error(error.toString())
      console.log(error)
    }
  }

  return (
    <>
      
      <div>
        <div style={{ display: 'flex' }}>
          <InputField
            inputValue={dataValues}
            setInputValue={setDataValues}
            name="title"
            type="text"
            placeholder="Enter Brand Name..."
            label="Brand Name"
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

export default AdminBrandEdit;
