import React from 'react'

const CompletedProduct = () => {
  return (

    <tr>
      <td>{ product.product.title }</td>
      <td>{ product.product.itemNumber }</td>
      <td>{ product.quantity }</td>
      <td>$ { product.amount }</td>
    </tr>

  )
}

export default CompletedProduct
