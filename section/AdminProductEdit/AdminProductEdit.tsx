"use client"
import {
  apiCreateProduct,
  apiUpdateProduct,
} from '@/app/api-request/productCalls'
import InputField from '@/components/InputField/InputField'
import { Product } from '@/store/slice/productSlice'
import { message, Select } from 'antd'
import React from 'react'
import { useState } from 'react'

export interface SectionEditProps {
  url: string;
  method: string;
}

export interface ProductType {
   title: string,
   category: string,
   price: number|string,
   colors: string,
   sizes: string,
   available: number|string,
   brand: string,
   description: string,
}
const AdminProductSectionEdit = (props: SectionEditProps) => {
  const { url, method } = props

  const [isCreated, setIsCreated] = useState(false)

  const [dataValues, setDataValues] = useState<ProductType>({
    title: '',
    category: '',
    price: '',
    colors: '',
    sizes: '',
    available: '',
    brand: '',
    description: '',
  })

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
    } catch (error: any) {
      message.error(error.toString())
      console.log(error)
    }
  }

  return (
    <div>
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
