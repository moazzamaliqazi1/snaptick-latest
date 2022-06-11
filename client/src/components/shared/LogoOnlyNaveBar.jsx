import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom"
import logoImage from "../../images/logo.png"
import { useSelector, useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { addUser } from "../../redux/action";
const LogoOnlyNaveBar = () => {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  return (
    <>
      <Box>
        <nav className="" style={{  backgroundColor: 'white',position:"fixed",top:0,left:0,zIndex:9 ,width:"100%" ,borderBottom:"1px solid grey"}} >
          <div className="container">
            <header className=" d-flex flex-wrap align-items-center justify-content-center justify-content-md-between mb-1">
              <li><div className="nav-link px-4 link-dark" style={{ cursor: 'pointer', fontSize: 15 }} onClick={() => window.location.replace('/#home')}>
                <img src={logoImage} width="150" height="55px" alt="SnapTick" />
              </div></li>

              <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <div className="dropdown ">
                  <li><div className="nav-link px-4 link-dark" style={{ cursor: 'pointer', fontSize: 15 }} onClick={() => window.location.replace('/')}>Services</div></li>
                  <div className="dropdown-content">

                    <Link className="link-dark text-decoration-none nav-link px-4 link-dark"  to='/photo-frame' >Snap Frame</Link>
                    <Link className="link-dark text-decoration-none nav-link px-4 link-dark"  to='/PhotoBook' >Snap Book</Link>
                  </div>
                </div>
                <li><div className="nav-link px-4 link-dark" style={{ cursor: 'pointer', fontSize: 15 }} onClick={() => window.location.replace('/#tracking')}>Tracking</div></li>
                <li><div className="nav-link px-4 link-dark" style={{ cursor: 'pointer', fontSize: 15 }} onClick={() => window.location.replace('/#about')}>About Us</div></li>
                <li><div className="nav-link px-4 link-dark" style={{ cursor: 'pointer', fontSize: 15 }} onClick={() => window.location.replace('/#contact')}>Contact Us</div></li>
              </ul>

              <div className="col-md-3 text-end">
                {user && user.user_type ? <i className="bi bi-cart p-2" style={{ backgroundColor: '#003690', color: 'white' }} ></i>: null}
                <Link className="link-dark text-decoration-none p-3" style={{ color: "#003690" }} onClick={(event)=> {
                  if(user && user.user_name){
                    event.preventDefault();
                  }
                }}  to='/login' >{user && user.user_name ? user.user_name: 'LOGIN'}</Link>
                {user && user.user_type ? <Link className="link-dark text-decoration-none p-3" style={{ color: "#003690" }} onClick={()=>{
                  cookies.remove("token");
                  dispatch(addUser({}));
                }} to='/login' >LOGOUT</Link>: null}
              </div>

            </header>
          </div>
        </nav>
      </Box>
    </>
  );
};
export default LogoOnlyNaveBar;
