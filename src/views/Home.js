import React from 'react'
import { Link } from 'react-router-dom'
import LogoLG from '../assets/images/logo_rose_large.png'
import Carousel from '../components/carousel/Carousel'
// import header from '../assets/images/header_p.png'

const Home = () => {
  return (
    <div>
      <div className="height" id="header-img">
        <div className="hchild d-flex flex-column justify-content-center align-items-center">
          <img className="mb-5 me-5" src={LogoLG} alt="" />
            <Link to="/newin" className="btn btn-pink" >NEW IN STORE</Link>
        </div>
        
      {/* <img id="header-img" src={header} alt="header"/> */}
      </div>
      <div className="container">
        <Carousel />
      </div>
    </div>
  )
}

export default Home
