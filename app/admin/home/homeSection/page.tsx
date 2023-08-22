import { Image, message, Table } from "antd";
import React, { useContext, useState } from "react";


const AdminContact = () => {
  let url = `/contact`

  const [selectedData, setSelectedData] = useState({});

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
  const setSeen = async (record: any) => {
    try {
      const res = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...record, seen: "true" }),
      });
      const data = await res.json();
      if (res.status == 200 || res.status == 201) {
        return;
      }
    } catch (error) {}
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text:string, record:any) => (
        <div className="category-table-name">{text}</div>
      ),
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      responsive: ["lg"],

    },

    {
      title: "View",
      key: "view",
      render: (text, record) => (
        <button
          className="np-admin-main-button"
          onClick={() => {
            setSeen(record);

            setTopSheetContent(
              <AdminContactEdit
                method="PUT"
                updateData={contact.find((data) => data.id == record.id)}
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
      render: (text, record) => (
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
        {/* <button
          className="np-admin-main-button add-button"
          onClick={() => {
            setTopSheetContent(<AdminContactEdit method="POST" url={url} />);
            setTopSheet(true);
          }}
        >
          Add Contact
        </button> */}
        <Table
          dataSource={contact}
          rowClassName={(record, index) => {
            return record.seen == "false" ? "set-unseen-row" : "";
          }}
          columns={columns}
        />
      </div>
    </div>
  );
};

export default AdminContact;