"use client";
import { IHomeSection } from './AdminHomeSection'
import InputField from '@/components/InputField/InputField'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Select, Space, message } from 'antd'
import type { SelectProps, UploadFile } from 'antd'
import AdminUploadPhoto from '../AdminUploadPhoto/AdminUploadPhoto'
import {
  apiCreateHomeSection,
  apiUpdateHomeSection,
} from '@/app/api-request/homeSectionCalls'
import { useStore } from '@/store/useStore'
import { IProduct } from '@/store/slice/productSlice'
import { fileListType } from '@/type/types';
import { HomeSection } from '@prisma/client';

export interface SectionEditProps {
  url: string
  method: string
  updateData?: HomeSection
}

const AdminHomeSectionEdit = (props: SectionEditProps) => {
  const { url, method } = props
  const { products, setProducts, fetchProducts } = useStore()
  const [isCreated, setIsCreated] = useState(false)
  const [selectProduct, setSelectProduct] = useState<SelectProps['options']>([])
  const [fileList, setFileList] = useState<UploadFile<any>[] | undefined>([])
  const [dataValues, setDataValues] = useState<IHomeSection>({
    title: '',
    subtitle: '',
    products: [],
  })

  useEffect(() => {
    if (props.updateData) {
      setDataValues(props.updateData)
      setIsCreated(true)
      if(props.updateData.fileName) {
      setFileList([{
        uid: props.updateData.id.toString(),
        name: props.updateData.fileName,
        status: 'done',
        url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/file/homeSection?filename=${props.updateData.fileName}`
      }])
     }
    }
  }, [])

  useEffect(() => {
    const result = products.map((data: IProduct) => {
      return {
        value: data.id,
        label: data.title,
      }
    })
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

const handleChange = (value: string[]) => {
  console.log(value)
  setDataValues({...dataValues, products: value})
}

  const handleSubmit = async () => {
    if (!dataValues.title || !dataValues.subtitle || dataValues.products?.length == 0) {
      return message.error('please fill all the fields.')
    }

    const homeSectionData = JSON.stringify(dataValues)
    console.log(dataValues);
    try {
      const homeSectionValues =
        method == 'POST'
          ? await apiCreateHomeSection(homeSectionData)
          : await apiUpdateHomeSection(homeSectionData, dataValues.id as number)
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
            fetchedFileList={fileList}
            action={`/api/homeSection/${dataValues.id}/upload`}
            listType="picture-card"
            name="homeSectionPhoto"
            multiple={false}
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
            value={props.updateData && props.updateData.products?.map((product) => {
                return {label: product.title, value: product.id}
            })} 
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
