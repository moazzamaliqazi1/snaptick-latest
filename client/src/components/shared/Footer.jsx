import React from 'react';
import facebook from '../../images/facebook.png'
import instagram from '../../images/instagram.png'
import whatsapp from '../../images/whatsapp.png'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <div className="container-full-width mt-4">
        {/* <!-- Footer --> */}
        <footer
          className="text-center text-lg-start text-white"
          style={{ backgroundColor: '#1c2331', width: "100%", display: "flex", flexDirection: "column" }}
        >
          {/* <!-- Section: Social media --> */}

          {/* <!-- Section: Links  --> */}
          <section className="pt-4">
            <div className="container-xl  text-md-start">
              {/* <!-- Grid row --> */}
              <div className="row mt-3">
                {/* <!-- Grid column --> */}
                <div className="col-md-3  mx-auto mb-4" >
                  {/* <!-- Content --> */}
                  <h4 className="text-uppercase fw-bold" style={{ color: 'white' }}>Stay in Touch</h4><br />

                  <a href='https://api.whatsapp.com/send?phone=03043999982' target='blank'><img src={whatsapp} className='mr-2' alt="" width={'30px'}></img></a>
                  <a href='https://www.facebook.com/snaptickpk/' target='blank'><img src={facebook} className='mr-2' alt="" width={'30px'}></img></a>
                  <a href='https://www.instagram.com/snaptickpk/' target='blank'><img src={instagram} alt="" className='' width={'30px'}></img></a>

                  <p className='mt-2' style={{ color: 'white', fontSize: '20px', fontFamily: 'georgia' }}>
                    @snaptickpk
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-3 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h4 className="text-uppercase fw-bold" style={{ color: 'white' }}>Services</h4><br />
                  <p>
                    <Link to="/photo-frame" className="text-white text-decoration-none">Snap Frame</Link>
                  </p>
                  <p>
                    <Link to="/photo-book" className="text-white text-decoration-none">Snap Book</Link>
                  </p>
                  <p>
                    <Link to="/hire-photographer" className="text-white text-decoration-none">Hire Photographer</Link>
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-3 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h4 className="text-uppercase fw-bold" style={{ color: 'white' }}>about us</h4><br />

                  <p>
                    <a href="#about" className="text-decoration-none text-white">About Us</a>
                  </p>
                  <p>
                    <a href="#contact" className="text-white text-decoration-none" >Help</a>
                  </p>

                </div>
                {/* <!-- Grid column --> */}
                {/* <!-- Grid column --> */}
                <div className="col-md-3 mx-auto mb-md-0 mb-4">
                  {/* <!-- Links --> */}
                  <h4 className="text-uppercase fw-bold" style={{ color: 'white' }}>Contact</h4> <br />

                  <p className="text-white"><i className="fas fa-home mr-3 text-white"></i> Lahore, 54000, Pakistan</p>
                  <p className="text-white"><i className="fas fa-envelope mr-3 text-white"></i> help@snaptickpk.com</p>
                  <p className="text-white"><i className="fas fa-phone mr-3 text-white"></i> + 92 304 39999 82</p>
                </div>
                {/* <!-- Grid column --> */}
              </div>
              {/* <!-- Grid row --> */}
            </div>
          </section>
          {/* <!-- Section: Links  --> */}
          {/* <!-- Copyright --> */}
          <div
            className="text-center p-3"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
          >
            © 2022 Copyright: SnapTick </div>
          {/* <!-- Copyright --> */}
        </footer>
        {/* <!-- Footer --> */}
      </div>
    </>
  )
}
export default Footer


