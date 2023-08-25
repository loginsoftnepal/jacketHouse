"use client"
import AdminHomeSectionEdit from "@/section/AdminHomeSectionEdit/AdminHomeSectionEdit";
import { useStore } from "@/store/useStore";
import { Image, message, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { useContext, useState } from "react";

interface DataType {
  key: string,
  title: string,
  collection: string,
}

const AdminHomeSection = () => {

  let url = `/contact`;
  const [selectedData, setSelectedData] = useState({});
  const { setTopSheetContent, setTopSheet } = useStore()
  const tableItemEdit = (record: any) => {};

  const tableItemDelete = async (record: any) => {
    try {
      const res = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: record.id }),
      });
      const data = await res.json();
      if (res.status == 200 || res.status == 201) {
        return message.success(data.message);
      }

      return message.error(data.message);
    } catch (error) {
      message.error(`Deleting Failed!`);
    }
  };


  const columns: ColumnsType<DataType> = [  
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text:string, record:any) => (
        <div className="category-table-name">{text}</div>
      ),
    },

    {
      title: "Collection",
      dataIndex: "collection",
      key: "collection",
      responsive: ["lg"],

    },

    {
      title: "View",
      key: "view",
      render: ( record:any) => (
        <button
          className="np-admin-main-button"
          onClick={() => {
            setTopSheetContent(
              <AdminHomeSectionEdit
                method="PUT"
                url={url}
              />
            );
            setTopSheet(true);
            tableItemEdit(record);
          }}
        >
          View
        </button>
      ),
    },
    {
      title: "Delete",
      key: "delete",
      render: (record:any) => (
        <button
          className="np-admin-main-button"
          onClick={() => tableItemDelete(record)}
        >
          Delete
        </button>
      ),
    },
  ];

  return (
    <div className="admin-store-category">
      <div className="page-heading">
        <button
          className="np-admin-main-button add-button"
          onClick={() => {
            setTopSheetContent(<AdminHomeSectionEdit method="POST" url={url} />);
            setTopSheet(true);
          }}
        >
          Add Home Section
        </button>
        <Table
          dataSource={[]}
          columns={columns}
        />
      </div>
    </div>
  );
};

export default AdminHomeSection;