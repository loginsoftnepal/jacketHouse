import InputField from "@/components/InputField/InputField";
import { message, Select } from "antd";
import React from "react";
import { useState } from "react";

export interface SectionEditProps {
    url: string;
    method: string;
}

const AdminProductSectionEdit = (props: SectionEditProps) => {
  const { url } = props;

  const [dataValues, setDataValues] = useState({
    name: "",
    category: "",
    price: "",
    colors: "",
    sizes: "",
    available: "",
    brand: "",
    description: '',
  });

  const handleSubmit = () => {
    console.log(dataValues);
  }


  return (
    <div>
      <div style={{ display: "flex" }}>
        <InputField
          inputValue={dataValues}
          setInputValue={setDataValues}
          name="name"
          type="text"
          placeholder="Enter Product Name..."
          label="Product Name"
        />

        <InputField
          inputValue={dataValues}
          setInputValue={setDataValues}
          name="price"
          type="text"
          placeholder="Enter Price..."
          label="Price"
        />
      </div>
      <div style={{ display: "flex" }}>
        <InputField
          inputValue={dataValues}
          setInputValue={setDataValues}
          name="category"
          type="text"
          placeholder="Enter Category..."
          label="Category"
        />
      </div>
      <div style={{ display: "flex" }}>
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

      <button  className="text-white p-2 rounded-3xl border-2 border-white m-2" onClick={() => handleSubmit()}>
        {props.method == "POST" ? "Add" : "Update"}
      </button>
    </div>
  );
};

export default AdminProductSectionEdit;