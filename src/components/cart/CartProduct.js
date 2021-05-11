import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart, deleteProduct } from '../../store/actions/cartActions' 

const CartProduct = ({product}) => {

  const dispatch = useDispatch();

  const add = e => {
    e.stopPropagation();
    dispatch(addToCart(product))
  }

  const remove = e => {
    e.stopPropagation();
    dispatch(removeFromCart(product.id))
  }

  const del = e => {
    e.stopPropagation();
    dispatch(deleteProduct(product.id))
  }

  return (

      <div className="d-flex my-3 border-bottom py-3 px-2">
          <img src={ product.img } alt="product" className="img-fluid image-width me-3"/>
        <div className="d-flex justify-content-between col ">
          
          <div className="dropdown-product-text">
            <p><strong>{ product.title }</strong></p>
            <p><strong>{ product.quantity } x ${ product.price }</strong></p>
            <p className="mb-3">Color: { product.color }</p>
            {/* <p>Size: { size }</p> */}
            {/* <p>Quantity: { product.quantity }</p> */}
            {/* <p>Total price: $ { amount }</p> */}
            <div className="btn-group">
              <button onClick={remove} className="btn btn-light py-1"><i className="fas fa-minus"></i></button>
              <button onClick={add} className="btn btn-light py-1"><i className="fas fa-plus"></i></button>
            </div>
          </div>

          <div className="d-flex flex-column justify-content-between align-items-end">
            <button type="button" className="btn btn-sm btn-light px-3" onClick={del}><i className="fas fa-trash"></i></button>
            
          </div>

        </div>



      </div>

  )
}

export default CartProduct