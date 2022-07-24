import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import validator from "validator";
import user from "../../api/user";
const About = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });
  const sendMessage = async (event) => {
    try {
      event.preventDefault();
      if (contact.name && contact.email && contact.message) {
        if (validator.isEmail(contact.email)) {
          const response = await user.sendContactMessage(contact);
          if (response.status === 200 && response.data.is_success) {
            toast.success(response.data.message);
          } else {
            toast.error(response.data.message);
          }
        } else {
          toast.error("Please enter valid email");
        }
      } else {
        toast.error("Please fill all the fields");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
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
      <hr className="m-5" />
      <div className="container-contact100">
        <div className="wrap-contact100">
          <form className="contact100-form validate-form">
            <span className="contact100-form-title">
              <b>CONTACT US</b>
            </span>
            <label className="label-input100" for="Name">
              Enter Name *
            </label>
            <div
              className="wrap-input100  validate-input required"
              required
              data-validate="Type Name"
            >
              <input
                className="input100"
                type="text"
                required
                name="name"
                placeholder="Name"
                value={contact.name}
                onChange={(event) => {
                  setContact((prev) => {
                    return {
                      ...prev,
                      [event.target.name]: event.target.value,
                    };
                  });
                }}
              />
              <span className="focus-input100"></span>
            </div>

            <label className="label-input100" for="email">
              Enter Email *
            </label>
            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                className="input100"
                type="text"
                name="email"
                placeholder="Eg. example@email.com"
                value={contact.email}
                onChange={(event) => {
                  setContact((prev) => {
                    return {
                      ...prev,
                      [event.target.name]: event.target.value,
                    };
                  });
                }}
                required
              />
              <span className="focus-input100"></span>
            </div>
            <label className="label-input100" for="message">
              Message *
            </label>
            <div
              className="wrap-input100 validate-input"
              data-validate="Message is required"
            >
              <textarea
                className="input100"
                name="message"
                placeholder="Your Message"
                value={contact.message}
                onChange={(event) => {
                  setContact((prev) => {
                    return {
                      ...prev,
                      [event.target.name]: event.target.value,
                    };
                  });
                }}
                required
              ></textarea>
              <span className="focus-input100"></span>
            </div>

            <div className="container-contact100-form-btn">
              <button
                className="contact100-form-btn"
                type="submit"
                onClick={sendMessage}
              >
                Send Message
              </button>
            </div>
          </form>

          <div
            className="contact100-more flex-col-c-m"
            style={{ backgroundImage: `url("../../images/bg-01.jpg")` }}
          >
            <div className="flex-w size1 p-b-47">
              <div className="txt1 p-r-25">
                <span className="lnr lnr-map-marker"></span>
              </div>

              <div className="flex-col size2">
                <span className="txt1 p-b-20">Address</span>

                <span className="txt2">Gulshan-e-Ravi Lahore, Pakistan</span>
              </div>
            </div>

            <div className="dis-flex size1 p-b-47">
              <div className="txt1 p-r-25">
                <span className="lnr lnr-phone-handset"></span>
              </div>

              <div className="flex-col size2">
                <span className="txt1 p-b-20">Lets Talk</span>

                <span className="txt2">+92 304 3999982</span>
              </div>
            </div>

            <div className="dis-flex size1 p-b-47">
              <div className="txt1 p-r-25">
                <span className="lnr lnr-envelope"></span>
              </div>

              <div className="flex-col size2">
                <span className="txt1 p-b-20">General Support</span>

                <span className="txt3">support@snaptick.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
