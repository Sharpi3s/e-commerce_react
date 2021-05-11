import React from 'react'

const CompletedProduct = () => {
  return (

    <tr>
      {/* <td scope="row"><img src={ product.img } alt=""></td> */}
      <td>{ product.product.title }</td>
      <td>{ product.product.itemNumber }</td>
      <td>{ product.quantity }</td>
      <td>$ { product.amount }</td>
    </tr>

  )
}

export default CompletedProduct
