import { useRef} from 'react'
import { NavLink, Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { loggedOut } from '../../store/actions/userAction'
import ShoppingCart from '../cart/ShoppingCart';
import logo from '../../assets/images/logo_rose_b.png';

const Navbar = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const totalCartQuantity = useSelector(state => state.cartReducer.totalCartQuantity)
  const loggedIn = useSelector(state => state.userReducer.loggedIn)
  const admin = useSelector(state => state.userReducer.admin)

  let oneUser = useSelector(state => state.userReducer.oneUser)

  const nav = useRef();

  const hide = () => {
    nav.current.click()
  }

  const signOut = () => {
    dispatch(loggedOut())
    history.push('/')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <div className="container relative">

        <ul className="navbar-nav flex-row nav-icons order-last">

          <div className="navbar-brand logo">
            <NavLink id="logoLink" exact to="/">
              <img id="logo1" src={logo} alt="" />
            </NavLink>
          </div>

          <li className="nav-item dropdown mx-3">
            <span
              className="nav-link dropdown-toggle hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-user fa-lg" ></i>
            </span>
            <ul className="dropdown-menu dropdown-menu-end" >
              <li>
              {
                loggedIn && oneUser ? 
                  <div id="userLogOut" >

                      <a href="/myprofile" className="dropdown-item">
                        <p className="text-dark" >My profile</p>
                      </a>

                      <a href="/myorders" className="dropdown-item">
                        <p className="text-dark" >My Orders</p>
                      </a>
                      {
                        admin ?
                        
                        <a href="/admin" className="dropdown-item">
                          <p className="text-dark" >Admin</p>
                        </a>
                        : ''
                      }

                      <div className="dropdown-item">
                        <button className="btn btn-pink btn-block" onClick={signOut}>Sign Out</button>
                      </div>

                  </div>
                  :
                  <div id="userLogIn" className="dropdown-item">
                    <Link to="/signin" className="btn btn-pink w-100">Sign In</Link>
                  </div>
              }

              </li>
            </ul>

          </li>
          <li>
            <div className="nav-item dropdown mx-3">
                <span
                  className="nav-link dropdown-toggle hidden-arrow"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-shopping-bag fa-lg"></i>
                  {
                    totalCartQuantity > 0 ? 
                    <span className="badge rounded-pill badge-notification bg-pink">{ totalCartQuantity }</span>
                    : ''
                  }
                 
                </span>
                <ul className="dropdown-menu dropdown-menu-end shopping-cart" aria-labelledby="navbarDropdownMenuLink">
                    <ShoppingCart />
                </ul>
              </div >
          </li>
        </ul>

        
        <button
            ref={nav}
            className="navbar-toggler order-first"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation" >

            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse order-first" id="navbarNav">
            <ul className="navbar-nav">
              <li onClick={hide} className="nav-item">
                <NavLink className="nav-link" exact to="/newin">New in</NavLink>
              </li>
              <li onClick={hide} className="nav-item">
                <NavLink className="nav-link" exact to="/shop">Shop</NavLink>
              </li>
            </ul>
          </div>
       

      </div >
    </nav >
  )
}

export default Navbar
