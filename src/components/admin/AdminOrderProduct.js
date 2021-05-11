import React from 'react'

const AdminOrderProduct = ({product}) => {
  return (

      <tr className="">
        <td >{ product.title }</td>
        <td > { product.category }</td>
        <td > { product.quantity }</td>
        {/* <p> { product.size }</p> */}
        <td>$ { product.price }</td>
      </tr>
  )
}

export default AdminOrderProduct
