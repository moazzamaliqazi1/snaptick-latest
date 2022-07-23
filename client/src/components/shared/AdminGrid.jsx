import React, { useState, useEffect } from "react";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import user from "../../api/user";
import Cookies from "universal-cookie";
import moment from "moment";
import { saveAs } from "file-saver";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom"
const gridStyle = { minHeight: 550 };

const downloadImage = (url, file_name) => {
  saveAs(url, file_name); // Put your image url here.
};

const AdminGrid = () => {
  const [dataSource, setDataSource] = useState([]);
  const cookies = new Cookies();
  const token = cookies.get("token");
  const navigate = useNavigate()
  const updatedState = async(status, _id, transaction_id)=>{
    try {
        const ids = dataSource.reduce((prev, current)=>{
            if(current.transaction_id === transaction_id){
                return [
                    ...prev,
                    current._id
                ]
            }
            else {
                return prev
            }
        }, [])
        await user.updateOrderStatus(status, ids, token)
        await fetchOrders()
    } catch (error) {
        console.log(error)
    }
  }
  const columns = [
    {
      name: "user_name",
      header: "User Name",
      defaultFlex: 1,
      type: "text",
    },
    {
      name: "transaction_id",
      header: "Order Id",
      defaultFlex: 1,
      type: "text",
    },
    {
      name: "quantity",
      header: "Quantity",
      defaultFlex: 1,
      type: "number",
    },
    {
      name: "frame_id",
      header: "Frame Id",
      defaultFlex: 1,
      type: "text",
      render: ({ value }) => {
        return (
          <span>{value ? value: "Book"}</span>
        );
      },
    },
    {
      name: "phone_number",
      header: "Phone Number",
      defaultFlex: 1,
      type: "text",
    },
    {
      name: "address",
      header: "Address",
      defaultFlex: 1,
      type: "text",
    },
    {
      name: "image",
      header: "Image",
      defaultFlex: 1,
      render: ({ value }) => {
        JSON.parse(value).map((item)=>{
          return (
            <img
              onClick={() =>
                downloadImage(`http://localhost:8000/static/${item}`, item)
              }
              style={{ maxWidth: "38px", width: "100%" }}
              src={`http://localhost:8000/static/${item}`}
              alt="frame"
            />
          );
        })
      },
    },
    {
      name: "status",
      header: "Status",
      defaultFlex: 1,
    },
    {
      name: "payment_type",
      header: "payment_type",
      defaultFlex: 1,
    },
    {
      name: "payment_status",
      header: "payment_status",
      defaultFlex: 1,
      render: ({ value }) => {
        return value ? "Done" : "Not Yet";
      },
    },
    {
      name: "createdAt",
      header: "Create Date",
      defaultFlex: 1,
      type: "date",
      render: ({ value }) => {
        return moment(value).local().format();
      },
    },
    {
      name: "status_change",
      header: "Actions",
      defaultFlex: 1,
      render: ({ value }) => {
        return (
          <>
            {["processing", "cancelled", "completed"].map((item) => {
              if (
                value.status !== "pending" &&
                value.status !== "failed" &&
                value.status !== item
              ) {
                return (
                  <Box>
                    <Button
                      onClick={() => updatedState(item, value._id, value.transaction_id)}
                    >
                      {item}
                    </Button>
                  </Box>
                );
              }
            })}
          </>
        );
      },
    },
  ];
  const fetchOrders = async () => {
    try {
      const response = await user.getAllOrders(token);
      if (response.status === 200 && response.data.is_success) {
        setDataSource(
          response.data.data.map((item) => {
            return {
              ...item,
              status_change: {
                status: item.status,
                _id: item._id,
                transaction_id: item.transaction_id
              },
            };
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  const logoutAdmin = async()=>{
    try {
      const response = await user.logout(token);
      if(response.status === 200 && response.data.is_success){
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchOrders();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Button onClick={logoutAdmin}>Logout</Button>
      <h4>Admin Grid</h4>
      <ReactDataGrid
        idProperty="id"
        columns={columns}
        dataSource={dataSource}
        style={gridStyle}
        rowHeight={60}
      />
    </>
  );
};
export default AdminGrid;
