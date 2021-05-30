import React, { useState  } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import CartItem from '../components/cart/CartItem';
import { addOrder} from '../store/actions/orderActions'

const Cart = () => {

  const dispatch = useDispatch()
  const history = useHistory()

  const shoppingCart = useSelector(state => state.cartReducer.shoppingCart);
  const totalCartAmount = useSelector(state => state.cartReducer.totalCartAmount);
  const totalCartQuantity = useSelector(state => state.cartReducer.totalCartQuantity);
  const user = useSelector(state => state.userReducer.buildUser)
  const loggedIn = useSelector(state => state.userReducer.loggedIn)

  const [notLoggedIn, setNotLoggedIn] = useState(false)
  const [error, setError] = useState(false)

  const shipping = 6

  const empty = (
    <div>
      <h2 className="mb-4">YOUR SHOPPING BAG IS EMPTY!</h2>
      <p className="mb-3">Add something to yourbag. </p>
        {
          !loggedIn ? 
          <div >
            <p>Are you a member? </p>
            <Link to="/signin" className="SignIn pointer text-decoration-underline text-dark">Sign in</Link>
          </div>
          : ''
        }
    </div>
  )

  // const send = () => {
  //   if(shoppingCart.length > 0) {
  //     if(loggedIn) {
  //       let newOrder = {
  //         cart: shoppingCart,
  //         total: totalCartAmount + shipping,
  //         user: user,
  //         itemsQty: totalCartQuantity
  //       }
  //       dispatch(addOrder(newOrder))
  //       console.log(newOrder)  
  //       history.push('/checkout')
        
  //     } else {
  //       setNotLoggedIn(true)
  //     }
  //   } else {
  //     console.log('error')
  //   }

  // }

  const send = () => {
    if(loggedIn) {
      if(shoppingCart.length > 0) {
        let newOrder = {
          cart: shoppingCart,
          total: totalCartAmount + shipping,
          user: user,
          itemsQty: totalCartQuantity
        }
        dispatch(addOrder(newOrder))
        console.log(newOrder)  
        history.push('/checkout')
      }
      else {
        setError(true)
      }
    } else {
      setNotLoggedIn(true)
    }

  }



  const emptyCartText = (
    <p>You can't place a order if you shoping bag is empty. </p>
  )

  const err = (
    <p>To place a order you need to be a member. <br/> Already a member? <Link className="SignIn pointer text-decoration-underline text-dark" to="/signin">Sign in. <br/> </Link>Not a member? <Link className="SignIn pointer text-decoration-underline text-dark" to="/registernewuser">Register here</Link></p>
  )

  return (
    
    <div className="shoppingBag height-cart">
      <div className="container d-md-flex justify-content-between pt-5">

        <div className="col-12 col-md-7 col-lg-6">
          <h2 className="mb-5">Shopping bag items</h2>
          <div className="card-row">
              {
                shoppingCart && shoppingCart.map(product => (
                  <CartItem key={product.id} product={product} />
                ))
              }
              {
                shoppingCart.length < 1 && empty
              }
          </div>
        </div>


        <div className="col-12 col-md-5 col-lg-5 col-xl-4 ps-4 total">
          <h2 className="mb-5">Shopping bag total</h2>
          <div className="bg-white py-3">
            <div className="d-flex justify-content-between">
              <p>Order value</p>
              <p><strong>$ {totalCartAmount} </strong></p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Delivery</p>
              <p><strong>$ {shipping} </strong></p>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <h3>Total:</h3>
              <h3><strong>$ {totalCartAmount + shipping}</strong></h3>
            </div>
            <div className="mt-5 pb-2" >
              <button className="btn btn-pink mb-3" onClick={send}>Place order</button>
            </div>
          </div>
          {
            notLoggedIn ? 
              err
            : 
            error ?
              emptyCartText
            : ''
          }
        </div>
        
      </div>
    </div>
  )
}

export default Cart
