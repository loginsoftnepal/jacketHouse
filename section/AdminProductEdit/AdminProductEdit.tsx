'use client'
import {
  apiCreateProduct,
  apiUpdateProduct,
} from '@/app/api-request/productCalls'
import InputField from '@/components/InputField/InputField'
import { Brand, Category, Product, ProductImage } from '@prisma/client'
import { message, Select, SelectProps, Space } from 'antd'
import { RcFile, UploadFile } from 'antd/es/upload'
import React, { useEffect } from 'react'
import { useState } from 'react'
import AdminUploadPhoto from '../AdminUploadPhoto/AdminUploadPhoto'

export interface SectionEditProps {
  url: string
  method: string
  updateData?: IProduct
}

export interface IProduct extends Product {
  category?: Category,
  brand?: Brand,
  image?: ProductImage[]
}

export interface ProductType {
  id?: number
  title: string
  image?: string | null
  category: string | null | number
  price: number
  colors?: string | null
  sizes?: string | null
  gender?: string | null
  available?: number | null
  brand: string | number | null
  description: string
}

const AdminProductSectionEdit = (props: SectionEditProps) => {
  const { url, method } = props;
  const [isCreated, setIsCreated] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [selectCategory, setSelectCategory] = useState<SelectProps['options']>([]);
  const [selectBrand, setSelectBrand] = useState<SelectProps['options']>([]);
  const [fileList, setFileList] = useState<UploadFile<any>[] | undefined>([])
  const [dataValues, setDataValues] = useState<IProduct | ProductType>({
    title: '',
    category: '',
    price: 0,
    colors: '',
    sizes: '',
    available: 0,
    brand: '',
    gender: '',
    description: '',
  })

  useEffect(() => {
    if (props.updateData) {
      setDataValues({
        title: props.updateData.title ? props.updateData.title : '',
        category: props.updateData.categoryId ? props.updateData.categoryId : '',
        price: props.updateData.price ? props.updateData.price : 0,
        colors: props.updateData.colors ? props.updateData.colors: '',
        sizes: props.updateData.sizes ? props.updateData.sizes : '',
        available: props.updateData.available ? props.updateData.available : 0,
        brand: props.updateData.brandId ? props.updateData.brandId : '',
        gender: props.updateData.gender ? props.updateData.gender : '',
        description: props.updateData.description ? props.updateData.description : ''
      });
      setIsCreated(true);
      if(props.updateData.image) {
        setFileList(
        props.updateData.image.map((img) => {
         return {
           uid: img.id.toString(),
          name: img.fileName,
          status: 'done',
          url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/file/upload?filename=${img.fileName}`
         }
        }))
      }
    }
  }, [])

  console.log(fileList)

  useEffect(() => {
    if(categories && categories.length > 0) {
     const result = categories.map((data) => {
      return {
        value: data.id,
        label: data.title,
      }
    })
    setSelectCategory(result);
   }
  }, [categories])

  useEffect(() => {
   if (brands && brands.length > 0) { 
    const result = brands.map((data) => {
      return {
        value: data.id,
        label: data.title,
      }
    })
    setSelectBrand(result);
   }
  }, [brands])


  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/category`)
    .then((res) => {
       if (!res.ok) {
        throw new Error('Nextwork response was not ok')
       }
       return res.json()
    })
    .then((data) => {
        setCategories(data.category)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])


  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/brand`)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok.') 
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      setBrands(data.brands)
    })
    .catch((error) => {
      console.log(error);
    })
  }, [])

  const handleCategoryChange =  (value: any) => {
    setDataValues({...dataValues, category: value})
  }

  const handleBrandChange = (value: any) => {
     setDataValues({...dataValues, brand: value})
  }

  const handleSubmit = async () => {
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
    console.log(dataValues);
    const productData = JSON.stringify(dataValues)

    try {
      const productValues =
        method == 'POST'
          ? await apiCreateProduct(productData)
          : await apiUpdateProduct(productData, props.updateData?.id!)
      message.success('Product created successfully.')
      setDataValues(productValues)
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
            action={`/api/product/${dataValues.id}/upload`}
            listType="picture-card"
            name="productPhoto"
            multiple={true}
            productId={props.updateData?.id}
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
      <div style={{ display: 'flex', marginBottom: '5px' }}>
        <Space style={{ width: '100%', marginRight: '10px'}} direction="vertical">
          <Select
           allowClear
           style={{ width: '100%', height: '35px'}}
           onChange={handleCategoryChange}
           options={selectCategory}
           placeholder="Please Select Category"
           />
        </Space>
        <Space style={{ width: '100%'}} direction="vertical">
          <Select
           allowClear
           style={{ width: '100%', height: '35px'}}
           onChange={handleBrandChange}
           options={selectBrand}
           placeholder="Please Select Brand"
           />
        </Space>
       </div>
        <div style={{ display: 'flex'}}>
        <InputField
          inputValue={dataValues}
          setInputValue={setDataValues}
          name="colors"
          type="text"
          placeholder="Enter Colors (#fffff, #212121, #321212)"
          label="Color"
        />
      </div>
      <div style={{ display: 'flex' }}>
        <InputField
          inputValue={dataValues}
          setInputValue={setDataValues}
          name="sizes"
          type="text"
          placeholder="Enter Sizes (sm, md, lg, xl)"
          label="Sizes"
        />
        <InputField
          inputValue={dataValues}
          setInputValue={setDataValues}
          name="available"
          type="number"
          placeholder="Enter Available"
          label="Available"
        />
      </div>
      <div>
        <InputField
         inputValue={dataValues}
         setInputValue={setDataValues}
         name="gender"
         type="text"
         placeholder="Enter gender (Men, Women, children)"
         label="Gender"
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
