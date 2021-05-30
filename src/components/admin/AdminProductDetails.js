import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../../store/actions/ProductCatalogActions'

const AdminProductDetails = ({product}) => {
  
  let dispatch = useDispatch();

  const deleteOneProduct = (id) => { 
    dispatch(deleteProduct(id))
  }

  return (
    <tr className="align-middle">
      <th className="align-left" scope="row"><img src={product.img} className="imgSize" alt="" /></th>
      <td>{ product.id.slice(0, 7)}</td>
      <td>{ product.title }</td>
      <td>{ product.color }</td>
      <td>{ product.category }</td>
      <td>$ { product.price }</td>
      <td>
        <button className="btn btn-light px-3" onClick={() => deleteOneProduct(product.id)} ><i className="fas fa-trash-alt fa-lg"></i></button>
      </td> 
    </tr>
  )
}

export default AdminProductDetails
