"use client"
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
  url: string;
  method: string;
  updateData?: Product;
}

export interface ProductType {
   id?: number,
   title: string,
   image?:string | null,
   category: string,
   price: number,
   colors?: string | null,
   sizes?: string | null,
   available?: number | null,
   brand: string,
   description: string,
}

const AdminProductSectionEdit = (props: SectionEditProps) => {
  const { url, method } = props
  const [isCreated, setIsCreated] = useState(false)

  const [dataValues, setDataValues] = useState<ProductType>({
    title: '',
    category: '',
    price: 0,
    colors: '',
    sizes: '',
    available: 0,
    brand: '',
    description: '',
  })

  useEffect(() => {
      if(props.updateData) {
        setDataValues(props.updateData)
        setIsCreated(true);
      }
  }, [])
  const handleSubmit = async () => {
    console.log(dataValues)
    if (
      !dataValues.title ||
      !dataValues.price ||
      !dataValues.colors ||
      !dataValues.available ||
      !dataValues.brand ||
      !dataValues.description ||
      !dataValues.sizes 
    ) {
     return message.error('Please fill all the fields.')
    }

    const productData = JSON.stringify(dataValues)

    try {
      const product =
        method == 'POST'
          ? await apiCreateProduct(productData)
          : await apiUpdateProduct(productData)
      message.success('Product created successfully.')
      setDataValues(product);
      setIsCreated(true);
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
           action={`/api/product/${dataValues.id}/upload`}
           listType='picture-card'
           name='productPhoto'
           multiple={true}
           productId={dataValues.id}
          />
       </div>
     )}
      <div style={{ display: 'flex' }}>
        <InputField
          inputValue={dataValues}
          setInputValue={setDataValues}
          name="title"
          type="text"
          placeholder="Enter Product Name..."
          label="Product Name"
        />

        <InputField
          inputValue={dataValues}
          setInputValue={setDataValues}
          name="price"
          type="number"
          placeholder="Enter Price..."
          label="Price"
        />
      </div>
      <div style={{ display: 'flex' }}>
        <InputField
          inputValue={dataValues}
          setInputValue={setDataValues}
          name="category"
          type="text"
          placeholder="Enter Category..."
          label="Category"
        />
        <InputField
          inputValue={dataValues}
          setInputValue={setDataValues}
          name='colors'
          type='text'
          placeholder='Enter Colors...'
          label='Color'
        />
      </div>
      <div style={{ display: 'flex'}} >
       <InputField
        inputValue={dataValues}
        setInputValue={setDataValues} 
        name="sizes"
        type="text"
        placeholder="Enter Sizes"
        label= 'Sizes'
       />
       <InputField 
        inputValue={dataValues} 
        setInputValue={setDataValues}
        name='available'
        type='number'
        placeholder='Enter Available'
        label="Available"
       />
      </div>
      <div>
        <InputField
         inputValue={dataValues} 
         setInputValue={setDataValues}
         name="brand"
         type='text'
         placeholder='Enter Brand'
         label='Brand'
         />
      </div>

      <div style={{ display: 'flex' }}>
        <InputField
          inputValue={dataValues}
          setInputValue={setDataValues}
          name="description"
          type="text"
          placeholder="Enter Description..."
          label="Description"
          textArea
        />
      </div>

      <button
        className="text-white p-2 rounded-3xl border-2 border-white m-2"
        onClick={() => handleSubmit()}
      >
        {props.method == 'POST' ? 'Add' : 'Update'}
      </button>
    </div>
  )
}

export default AdminProductSectionEdit
