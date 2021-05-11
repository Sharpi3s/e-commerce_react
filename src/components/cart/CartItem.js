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
    // <div>
    //   <div className="p-2 d-flex justify-content-between align-items-center">

    //     <div className="d-flex align-items-center">
    //       <img src={product.img} alt="product" className="img-fluid image-width"/>
    //       <div>
    //         <div><strong>{ product.title }</strong></div>
    //         <div><small>{ product.quantity } x { product.price }</small></div>
    //       </div>
    //     </div>

    //     <div>
    //       <button type="button" className="btn btn-sm px-3" onClick={remove}>-</button>
    //       <button type="button" className="btn btn-sm px-3" onClick={add}>+</button>
    //       <button type="button" className="btn btn-sm btn-dark px-3" onClick={del}><i className="fas fa-trash"></i></button>
    //     </div>

    //   </div>
      
    // </div>

    <div className="card mb-4 p-3">
      <div className="d-flex col-12 col-md-10">

        <div className="col-5">
          <img src={ product.img } className="z-depth-0 imgProd" alt="product"/>
          {/* <img src={ product.img } className="img-fluid z-depth-0 imgProd" alt="product"/> */}
        </div>

        <div className="prodDet col-5 col-md-7">
          <h6>{ product.title }</h6>
          <p><strong>{ product.quantity } x $ { product.price }</strong></p>
        
          <p>Color: { product.color }</p>
          {/* <p>size: { item.size }</p> */}
          {/* <p>Quantity: { item.quantity }</p>
          <h5>${ item.amount }</h5> */}
          <div className="btn-group">
            <button onClick={remove} className="btn btn-light py-1"><i className="fas fa-minus"></i></button>
            <button onClick={add} className="btn btn-light py-1"><i className="fas fa-plus"></i></button>
          </div>
        </div>

        <div className="d-flex flex-column justify-content-between align-items-end">
          <button className="btn btn-light px-3" onClick={del}><i className="fas fa-trash fa-lg"></i></button>

        </div>

        {/* <div className="d-flex flex-column justify-content-between align-items-end">
          <button className="btn btn-light px-3" onClick={del}><i className="fas fa-trash fa-lg"></i></button>
          <div className="btn-group">
            <button onClick={remove} className="btn btn-light py-1"><i className="fas fa-minus"></i></button>
            <button onClick={add} className="btn btn-light py-1"><i className="fas fa-plus"></i></button>
          </div>
        </div> */}

      </div>

    </div>
  )
}

export default CartItem
