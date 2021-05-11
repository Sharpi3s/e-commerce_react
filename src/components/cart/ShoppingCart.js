import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartProduct from './CartProduct'

const ShoppingCart = () => {

  const shoppingCart = useSelector(state => state.cartReducer.shoppingCart);
  const totalCartAmount = useSelector(state => state.cartReducer.totalCartAmount);

  const empty = (
    <div className="p-2 d-flex align-items-center">
      Your cart is empty
    </div>
  )

  return (
    <div>
      <div className="height-dropdown">
        {
          shoppingCart && shoppingCart.map(product => (
            <CartProduct key={product.id} product={product} />
          ))
        }
        {
          shoppingCart.length < 1 && empty
        }
      </div>

      <div className="dropdown-divider"></div>

      <div className="p-2 d-flex justify-content-between align-items-center">
        <div>
          <div className="total-price">
            Total Amount: <span>${totalCartAmount}</span>
          </div>
          <small className="text-muted">ink. vat</small>
        </div>
        <Link to="/cart" className="btn btn-pink">Go to cart</Link>
      </div>
      
    </div>
  )
}

export default ShoppingCart