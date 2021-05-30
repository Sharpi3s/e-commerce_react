import React from 'react'

const OrderProducts = ({product}) => {

  return (
    <div className="d-flex justify-content-between col-12 mb-3 border-bottom pb-3">
      <div className="col-2">
        <img id="orderImg" src={ product.img } alt="" />
      </div>
      <div className="d-flex justify-content-between col-10 align-items-center">
        <p className="col-6">{ product.title }</p>
        <p className="col-3"> { product.quantity }</p>
        <p>$ { product.price }</p>
      </div>
    </div>
  )
}

export default OrderProducts
