import InputField from "@/components/InputField/InputField";
import { message, Select } from "antd";
import React from "react";
import { useState } from "react";

export interface SectionEditProps {
    url: string;
    method: string;
}

const AdminHomeSectionEdit = (props: SectionEditProps) => {
  const { url } = props;

  const [dataValues, setDataValues] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  return (
    <div>
      <div style={{ display: "flex" }}>
        <InputField
          inputValue={dataValues}
          setInputValue={setDataValues}
          name="name"
          type="text"
          placeholder="Enter Name..."
          label="Name"
        />

        <InputField
          inputValue={dataValues}
          setInputValue={setDataValues}
          name="email"
          type="text"
          placeholder="Enter Email..."
          label="Email"
        />
      </div>
      <div style={{ display: "flex" }}>
        <InputField
          inputValue={dataValues}
          setInputValue={setDataValues}
          name="phone"
          type="text"
          placeholder="Enter Phone..."
          label="Phone"
        />
      </div>
      <div style={{ display: "flex" }}>
        <InputField
          inputValue={dataValues}
          setInputValue={setDataValues}
          name="message"
          type="text"
          placeholder="Enter message..."
          label="Message"
          textArea
        />
      </div>

      <button  className="np-admin-main-button">
        {props.method == "POST" ? "Add" : "Update"}
      </button>
    </div>
  );
};

export default AdminHomeSectionEdit;

