'use client'
import { Modal, Upload, message } from 'antd'
import React, { useEffect, useState } from 'react'
import {
  RcFile,
  UploadFile,
  UploadListType,
  UploadProps,
} from 'antd/es/upload/interface'
import { PlusOutlined } from '@ant-design/icons'

export interface UploadPhotoProps {
  action: string
  listType: UploadListType | undefined
  name: string
  productId?: number
  multiple: boolean
}

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })

function AdminUploadPhoto({
  action,
  listType,
  name,
  productId,
  multiple,
}: UploadPhotoProps) {
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')
  const [fileList, setFileList] = useState<UploadFile[]>([])

  console.log(process.env.NEXT_PUBLIC_SERVER_URL)
  const fetchPhoto = async () => {
    try {
      const response = await fetch(`${action}`)
      const res = await response.json()
      console.log(res.data)
      setFileList(
        res.data?.map((img: any) => {
          return {
            uid: img.id,
            name: img.fileName,
            status: 'done',
            url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/file?filename=${img.fileName}`,
          }
        }),
      )
    } catch (error: any) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (productId) {
      fetchPhoto()
    }
  }, [])

  const handleCancel = () => setPreviewOpen(false)

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile)
    }

    setPreviewImage(file.url || (file.preview as string))
    setPreviewOpen(true)
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1),
    )
  }

  const handleRemove = async (file: UploadFile) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/${action}?fileId=${file.uid}`,
        {
          method: 'DELETE',
        },
      )
      const res = await response.json()
      if (res.status == 'failed') {
        message.error('Failed to delete photo')
        return true
      }

      message.success('Photo deleted successfully')
      return true
    } catch (error: any) {
      message.error('Failed to delete photo.')
      return false
    }
  }

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList)
  const uploadButton = (
    <div>
      <PlusOutlined style={{ color: 'white' }} />
      <div style={{ marginTop: 8, color: 'white' }}>Upload</div>
    </div>
  )

  return (
    <>
      <Upload
        action={`${process.env.NEXT_PUBLIC_SERVER_URL}/${action}`}
        listType={listType}
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        onRemove={handleRemove}
        name={name}
        multiple={multiple ? true : false}
      >
        {uploadButton}
      </Upload>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  )
}

export default AdminUploadPhoto
