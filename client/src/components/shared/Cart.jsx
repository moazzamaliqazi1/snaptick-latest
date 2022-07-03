import React, { useState, useEffect } from "react";
import { RadioButton, RadioGroup } from "react-radio-buttons";
import PhoneInput from "react-phone-input-2";
import { useSelector } from "react-redux";
import Select from "react-select";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "universal-cookie";
import user from "../../api/user";
import { isMobilePhone } from "validator"
import { useNavigate } from "react-router-dom"
const options = [
  { value: "0", label: "0" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
];

/*
 * TODO: on place order,
    * 1. add cart item in setItem
    * 2. then hit api
*/
const Cart = () => {
  console.log(isMobilePhone(`+923024494416`))
  const profile = useSelector((state) => state.user);
  const cookies = new Cookies();
  const token = cookies.get("token");
  const navigate = useNavigate();
  const [item, setItem] = useState({
    address: profile.address ? profile.address: "",
    phone_number: profile.phone_number ? profile.phone_number: "",
    orders: [],
    payment_type: "cash",
    card_number: "",
  });
  const [cart, setCart] = useState([]);
  const fileForm = async (name, value, isQuantity, _id, price) => {
    try {
      if (isQuantity) {
        const newArr = []
        for(const loop of cart){
            newArr.push({
                ...loop,
                cost: loop._id === _id ? Number(price)*Number(value.value): loop.cost,
                quantity: loop._id === _id ? value.value: loop.quantity
            })
        }
        setCart(newArr)
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
  const fetchCartsItem = async () => {
    try {
      const result = await user.getCartItem("pending", token);
      if (result.status === 200 && result.data.is_success) {
        const newArr = []
        for (const loop of result.data.data) {
            newArr.push({
                ...loop,
                cost: ["frame1", "frame2", "frame3", "frame4", "frame5", "frame6"].includes(loop.frame_id) ? loop.quantity * 200 : loop.quantity*300
            })
        }
        setCart(newArr);
      } else {
        toast.error(result.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  const addToCard = async()=>{
    try {
      if(item.phone_number){
        const phone = item.phone_number.includes("+") ? item.phone_number.split("+")[1]: item.phone_number
        if(isMobilePhone(`+${phone}`)){
          if(item.address){
            let isValid = true;
            if(item.payment_type === 'online'){
              if(!item.card_number){
                isValid = false;
                toast.error("Please Select A Card");
              }
            }
            if(isValid){
              setItem((prev)=>{
                return {
                  ...prev,
                  orders: cart
                }
              });
              console.log(cart)
              const response = await user.getOrderPlace({...item, orders: cart, phone_number: `+${phone}`}, token)
              if(response.status === 200 && response.data.is_success){
                navigate(`/tracking-page?tracking_id=${response.data.data.tracking_id}`)
              }
              else {
                toast.error(response.data.message)
              }
            }
          }
          else {
            toast.error("Enter Address");
          }
        }
        else {
          toast.error("Enter Valid Phone Number");
        }
      }
      else {
        toast.error("Enter Phone Number");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  }
  const updatePhone = ()=>{
    setItem((prev)=>{
      return {
        ...prev,
        address: profile.address ? profile.address: "",
        phone_number: profile.phone_number ? profile.phone_number: "",
      }
    })
  }
  useEffect(() => {
    fetchCartsItem();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    updatePhone();
    // eslint-disable-next-line
  }, [profile]);
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
      <div className="container">
        <div className="row mt-5 pt-5">
          <div className="col-md-4 col-xs-12 m-0 p-0">
            <form
              className="contact100-form validate-form m-0 p-0"
              style={{ width: "100%" }}
            >
              <h3>
                <b>Checkout:</b>
              </h3>
              <label className="label-input100" for="Phone">
                Enter Phone Number *
              </label>
              <div
                className="wrap-input100  validate-input required"
                required
                data-validate="Type Phone"
              >
                <PhoneInput
                  country={"pk"}
                  placeholder="Phone Number"
                  enableSearch={true}
                  countryCodeEditable={false}
                  name="phone_number"
                  className="input100"
                  onClick="border-none"
                  inputClass="input100"
                  onChange={(value) => {
                    fileForm("phone_number", value, false, null, null);
                  }}
                  value={item.phone_number}
                />

                <span className="focus-input100"></span>
              </div>

              <label className="label-input100" for="address">
                Address *
              </label>
              <div
                className="wrap-input100 validate-input"
                data-validate="Address is required"
              >
                <textarea
                  className="input100"
                  name="address"
                  placeholder="Your Address"
                  value={item.address}
                  onChange={(e) => fileForm("address", e.target.value, false, null, null)}
                  required
                ></textarea>
                <span className="focus-input100"></span>
              </div>

              <div className="p-3">
                <input
                  type="radio"
                  value="cash"
                  name="payment_type"
                  checked={item.payment_type === "cash" ? true : false}
                  onChange={(event) => {
                    fileForm(event.target.name, event.target.value, false, null, null);
                  }}
                />{" "}
                Cash
                <input
                  type="radio"
                  value="online"
                  name="payment_type"
                  checked={item.payment_type === "online" ? true : false}
                  onChange={(event) => {
                    fileForm(event.target.name, event.target.value, false, null, null);
                  }}
                />{" "}
                Card
              </div>
              {profile.payment_cards && item.payment_type !== "cash" ? (
                <>
                  <div>
                    <p>Select Card</p>
                  </div>
                  <RadioGroup
                    style={{ width: "100%" }}
                    onChange={(value) => {
                      fileForm("card_number", value, null, null);
                    }}
                  >
                    {profile.payment_cards.map((payment_card) => {
                      return (
                        <RadioButton
                          key={payment_card._id}
                          value={payment_card._id}
                        >
                          {payment_card.number.slice(0, 4)} **** ****{" "}
                          {payment_card.number.slice(
                            payment_card.number.length - 4,
                            payment_card.number.length
                          )}
                        </RadioButton>
                      );
                    })}
                  </RadioGroup>
                </>
              ) : null}
            </form>
          </div>
          {cart.map((product) => {
            return (
              <>
                <div className="col-md-3 col-xs-12" key={product._id}>
                  <h3>Items</h3>
                  <div className={product.frame_id}>
                    <img
                      className="fi1"
                      src={`http://localhost:8000/static/${product.image}`}
                      alt=""
                    />
                  </div>
                </div>

                <div className="col-md-2 col-xs-12">
                  <h3>Quantity</h3>
                  <Select
                    options={options}
                    className="m-2"
                    defaultValue={options[1]}
                    name="quantity"
                    onChange={(value) => {
                      fileForm("quantity", value, true, product._id, [
                        "frame1",
                        "frame2",
                        "frame3",
                        "frame4",
                        "frame5",
                        "frame6",
                      ].includes(product.frame_id)
                        ? "200"
                        : "300");
                    }}
                  />
                </div>

                <div className="col-md-2 col-xs-12">
                  <h3>Price</h3>
                  <p style={{ fontSize: "20px", paddingTop: "10px" }}>
                    {product.cost}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <center>
              <Button
                style={{
                  backgroundColor: "#003690",
                  color: "white",
                  fontSize: "20px",
                }}
                onClick={addToCard}
              >
                Place Order
              </Button>
            </center>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
