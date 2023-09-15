import InputField from "@/components/InputField/InputField";
import { OrderType } from "@/type/types";
import { Order } from "@prisma/client";
import { Dropdown, message, Select, Switch } from "antd";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export interface IAdminPlacedOrderEdit {
    url: string,
    method: string,
    updateData?: OrderType
}

const AdminPlacedOrdersEdit = (props: IAdminPlacedOrderEdit) => {
  const {Option} = Select;
  const { url } = props;
  const server = process.env.NEXT_PUBLIC_SERVER_URL;

  const [dropValue, setDropValue] = useState("");

 const items = ["readyToShip", "inTransit", "delivered", "cancelled"];

const statusItems = items.map((ss, index) => {
  return {
    key: index,
    label: <div onClick={(e) => setDropValue(ss)}>{ss}</div>,
  };
});


  const [dataValues, setDataValues] = useState<OrderType>({
    city: "",
    country: '',
    line1: '',
    line2: '',
    province: '',
    postalCode: '',
    payment_status: '',
    deliveredDate: '',
    email: '',
    id: '',
    phone: "",
    purchasedDate: '',
    orderStatus: '',
    subtotal: '',
    total: '',
    userId: '',
    username: "",
    deliveryAmount: '',
    products: []
  });


  useEffect(() => {
    if(props.updateData) {
    setDataValues(props?.updateData);
}
  }, [props.updateData]);

  useEffect(() => {
      if(props.updateData) {
        setDropValue(props?.updateData.orderStatus);
      }
  }, [])

  useEffect(() => {
    if(dropValue) {
      setDataValues({...dataValues, orderStatus: dropValue})
    }
 }, [dropValue])


  const addData = async () => {

    if (!dataValues.orderStatus) {
      return message.error("Please select a Order Status");
    }


    try {

      const res = await fetch(url, {
        method: props.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          props.updateData
            ?  { 
               status: dataValues.orderStatus,
                orderId: dataValues.id,
              }
            : {
                ...dataValues,
              }
        ),
      });

     console.log(dataValues.orderStatus);

      const data = await res.json();
      if (res.status == 200 || res.status == 201) {
        return message.success(data.message);
      }
      return message.error(data.message);
    } catch (error) {
      message.error(`${props.updateData ? "Updating" : "Adding"} Failed!`);
    }
  };

  return (
    <div>
      <div style={{ display: "flex" }}>

        <Dropdown menu={{ items:statusItems }} placement="bottomLeft">
          <div className="admin-input-field">
            <div className="input-label">Order Status</div>
            <input
              type="text"
              value={dropValue}
              className="drop-input"
              placeholder="Select Order Status"
            />
          </div>
        </Dropdown>
        

        <InputField
          inputValue={dataValues}
          setInputValue={setDataValues}
          name="orderId"
          type="text"
          placeholder="Enter orderId"
          label="OrderId"
        />
      </div>
      <div style={{ display: "flex" }}>
        <InputField
          inputValue={dataValues}
          setInputValue={setDataValues}
          name="username"
          type="text"
          placeholder="Enter User Name"
          label="User Name"
        />
        <InputField
          inputValue={dataValues}
          setInputValue={setDataValues}
          name="email"
          type="text"
          placeholder="Enter email"
          label="Email"
        />
      </div>
      <div style={{ display: "flex" }}>
        <InputField
          inputValue={dataValues}
          setInputValue={setDataValues}
          name="phone"
          type="text"
          placeholder="Enter Phone"
          label="Phone"
        />

        <InputField
          inputValue={dataValues}
          setInputValue={setDataValues}
          name="userId"
          type="text"
          placeholder="Enter userId"
          label="userId"
        />
      </div>
    
       <div style={{display: 'flex'}}>
        <InputField
          inputValue={dataValues}
          setInputValue={setDataValues}
          name="customerId"
          type="text"
          placeholder="Enter Stripe CustomerId"
          label="CustomerId"
        />
     
     <InputField
          inputValue={dataValues}
          setInputValue={setDataValues}
          name="subtotal"
          type="text"
          placeholder="Enter subTotal"
          label="Subtotal"
        />
      </div>

      <div style={{display: 'flex'}}>
        <InputField
          inputValue={dataValues}
          setInputValue={setDataValues}
          name="deliveryAmount"
          type="text"
          placeholder="Enter Delivery Amount"
          label="Delivery Amount"
        />
     
     <InputField
          inputValue={dataValues}
          setInputValue={setDataValues}
          name="total"
          type="text"
          placeholder="Enter total"
          label="Total"
        />
      </div>

      <div style={{display: 'flex'}}>
        <InputField
          inputValue={dataValues}
          setInputValue={setDataValues}
          name="country"
          type="text"
          placeholder="Enter Country Name.."
          label="Country"
        />
     
     <InputField
          inputValue={dataValues}
          setInputValue={setDataValues}
          name="province"
          type="text"
          placeholder="Enter State..."
          label="State"
        />
      </div>

      <div style={{display: 'flex'}}>
        <InputField
          inputValue={dataValues}
          setInputValue={setDataValues}
          name="city"
          type="text"
          placeholder="Enter city"
          label="City"
        />
     
     <InputField
          inputValue={dataValues}
          setInputValue={setDataValues}
          name="line1"
          type="text"
          placeholder="Enter line 1."
          label="Line 1"
        />
      </div>

       <div style={{display: 'flex'}}>
        <InputField
          inputValue={dataValues}
          setInputValue={setDataValues}
          name="line2"
          type="text"
          placeholder="Enter line2"
          label="Line 2"
        />
     
     <InputField
          inputValue={dataValues}
          setInputValue={setDataValues}
          name="postalCode"
          type="text"
          placeholder="Enter Postal Code"
          label="Postal Code"
        />
      </div>

      {/* <div style={{ display: "flex" }}>
        <div>
          <div className="switch-header">NHS Service</div>
          <Switch defaultChecked onChange={onChange} />
        </div>
      </div> */}
   
      {/* <ImagePopupModal
        visible={visible}
        setVisible={setVisible}
        myImage={dataValues.image}
        setMyImage={setDataValues}
        name="image"
        dataValues={dataValues}
        heading="Select service image"
      /> */}

<div className="sales-list">
        {props.updateData?.products.map((pup) => {
          return (
            <div className="sales-list-item">
              <div className="view-admin-image">
                <img src={`${server}/${pup.image}`} alt="" />
              </div>
              <div className="sales-info">
                <div className="sal-pname">Product Name: {pup.title}</div>
                <div className="sal-quantity">Quantity: {}</div>
                <div className="sal-price">Price: Rs.{pup.price}</div>
                <div className="sal-pid">productId: {pup.id}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="total-container">
        <div className="total-title">Total</div>
     
        <div className="delivery">
          Delivery: {props.updateData?.deliveredDate.toLocaleString()}{" "}
          {props.updateData?.deliveredDate
            ? " (Rs. " + props.updateData?.deliveryAmount + ")"
            : ""}
        </div>
        <div className="total">Total: Rs. {props.updateData?.total}</div>
      </div>

      <button onClick={() => addData()} className="np-admin-main-button">
        {props.updateData ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default AdminPlacedOrdersEdit;