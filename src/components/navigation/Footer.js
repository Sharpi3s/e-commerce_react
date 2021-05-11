import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo_rose_b.png'

const Footer = () => {
  return (
    <div className="bg-pink text-center text-md-start footer-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 my-4 mb-md-0">
        
            <div className="d-flex flex-column justify-content-center align-items-center mb-4">
              <div className="me-4 my-3">
                <img id="imgLogoFooter" src={logo} alt="" />
              </div>
              <p className="col-9 text-center">
                Rosemay is a storytelling brand offering great fashion at a competitive price, aiming to be kind to the world and empowering the young women in it. Over 120 concept stores offers the experience in 19 markets. Online, Rosemay delivers to 28 markets, and via International shipping to an additional 64 destinations worldwide. Rosemay was founded in 2021.
              </p>
            </div>

            <div className="d-flex justify-content-center">  
              <div className="col-9 d-flex justify-content-evenly mb-3">        
                <Link to="/" className="text-uppercase pointer LP h5 text-dark">home</Link>
                <Link to="/shop" className="text-uppercase pointer LP h5 text-dark">shop</Link>
                <Link to="/" className="text-uppercase pointer LP h5 text-dark">about us</Link>
                <Link to="/" className="text-uppercase pointer LP h5 text-dark">faq</Link>
              </div>
            </div>

          </div>

          <div className="d-flex justify-content-center align-items-center mb-3">
            © 2021 Copyright
            <Link
              className="btn btn-link btn-floating text-dark m-1 ms-2"
              to="https://github.com/Sharpi3s/JavaScript_2"
              role="button"
              data-mdb-ripple-color="dark"
              ><i className="fab fa-github fa-2x"></i
            ></Link>
          </div>

        </div>
        
      </div>
    </div>
  )
}

export default Footer
