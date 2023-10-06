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
import { ICategorySection } from './AdminCategorySection'
import { apiCreateCategory, apiUpdateCategory } from '@/app/api-request/categoryCalls'

export interface SectionEditProps {
  url: string
  method: string
  updateData?: Product
}

const AdminCategoryEdit = (props: SectionEditProps) => {
  const { url, method } = props
  const [isCreated, setIsCreated] = useState(false)

  const [dataValues, setDataValues] = useState<ICategorySection>({
    title: '',
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

    const cateogryData = JSON.stringify(dataValues)

    try {
      const category =
        method == 'POST'
          ? await apiCreateCategory(cateogryData)
          : await apiUpdateCategory(cateogryData, dataValues.id!)
      message.success('Category created successfully.')
      setDataValues(category)
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
