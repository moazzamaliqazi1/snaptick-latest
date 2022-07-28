import React from "react";
import { ToastContainer, toast } from "react-toastify";
import Select from "react-select";

const options = [
  { value: "0", label: "0" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "10", label: "10" },
];

const BookFrameCart = ({ setItem, cart, setCart, setTotalPrice }) => {
  const fileForm = async (name, value, isQuantity, _id, price) => {
    try {
      if (isQuantity) {
        const newArr = [];
        for (const loop of cart) {
          newArr.push({
            ...loop,
            cost:
              loop._id === _id
                ? Number(price) * Number(value.value)
                : loop.cost,
            quantity: loop._id === _id ? value.value : loop.quantity,
          });
        }
        setTotalPrice(newArr.reduce((prev, current)=>{
            return prev + current.cost
          }, 0))
        setCart(newArr);
      }
      setItem((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
      
      <div className="col-md-12 col-xs-12 mt-4">
        <center>
          <div className="col-md-2"></div>
          <div className="col-md-3 col-xs-12 pt-4">
            <h4 className="fw-bold text-uppercase" style={{color: '#002856'}}>Books:</h4>
          </div>

          <div className="col-md-2 col-xs-12 pt-4">
            <h4 className="fw-bold text-uppercase" style={{color: '#002856'}}>Quantity:</h4>
          </div>

          <div className="col-md-3 col-xs-12 pt-4">
            <h4 className="fw-bold text-uppercase" style={{color: '#002856'}}>Price:</h4>
          </div>
        </center>
      </div>

      {cart.filter((item)=>item.order_type === "book").map((product) => {
        return (
          <>
            <div className="col-md-12 col-xs-12 mb-5" style={{ float: "right" }} key={product._id}>
              <center>
                <div className="col-md-2"></div>
                <div className="col-md-3 col-xs-12 pt-3">
                  <img
                    className="bookcart"
                    src={`http://localhost:8000/static/${
                      JSON.parse(product.image)[0]
                    }`}
                    alt=""
                  />
                </div>
                <div className="col-md-2 col-xs-12 pt-3">
                  <Select
                    options={options}
                    className="m-2"
                    defaultValue={options[1]}
                    name="quantity"
                    onChange={(value) => {
                      fileForm("quantity", value, true, product._id, "600");
                    }}
                  />
                </div>
                <div className="col-md-3 col-xs-12 pt-3">
                  <p
                    className="fw-bold"
                    style={{ fontSize: "20px", paddingTop: "10px" }}
                  >
                    Rs. &nbsp;{product.cost}
                  </p>
                </div>
              </center>
            </div>
          </>
        );
      })}
    </>
  );
};
export default BookFrameCart;
