import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart, deleteProduct } from '../../store/actions/cartActions' 

const CartItem = ({product}) => {

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

    <div className="card mb-4 p-3">
      <div className="d-flex col-12 col-md-10">

        <div className="col-5">
          <img src={ product.img } className="z-depth-0 imgProd" alt="product"/>
        </div>

        <div className="prodDet col-5 col-md-7">
          <h6>{ product.title }</h6>
          <p><strong>{ product.quantity } x $ { product.price }</strong></p>
          <p>Color: { product.color }</p>

          <div className="btn-group">
            <button onClick={remove} className="btn btn-light py-1"><i className="fas fa-minus"></i></button>
            <button onClick={add} className="btn btn-light py-1"><i className="fas fa-plus"></i></button>
          </div>
        </div>

        <div className="d-flex flex-column justify-content-between align-items-end">
          <button className="btn btn-light px-3" onClick={del}><i className="fas fa-trash fa-lg"></i></button>

        </div>

      </div>
    </div>
  )
}

export default CartItem
