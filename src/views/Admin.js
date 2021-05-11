import React, { useState, useEffect } from 'react'
import AdminOrders from '../components/admin/AdminOrders'
import AdminProducts from '../components/admin/AdminProducts'
import AdminUsers from '../components/admin/AdminUsers'

const Admin = () => {

let [status, setStatus] = useState(null)
// let status = 'products'
let prod = document.querySelector('.prod')
let ord = document.querySelector('.ord')
let use = document.querySelector('.use')

const switchAdmin = () => {
  if(status === 'products') {
    prod.classList.add('bg-light', 'border', 'border-bottom-0')
    ord.classList.remove('bg-light', 'border', 'border-bottom-0')
    use.classList.remove('bg-light', 'border', 'border-bottom-0')
    return <AdminProducts />
  }

  if(status === 'orders') {
    prod.classList.remove('bg-light', 'border', 'border-bottom-0')
    ord.classList.add('bg-light', 'border', 'border-bottom-0')
    use.classList.remove('bg-light', 'border', 'border-bottom-0')
    return <AdminOrders />
  }
  if(status === 'users') {
    prod.classList.remove('bg-light', 'border', 'border-bottom-0')
    ord.classList.remove('bg-light', 'border', 'border-bottom-0')
    use.classList.add('bg-light', 'border', 'border-bottom-0')
    return <AdminUsers /> 
  }
  else {
    return null
  }
}

const products = () => {
  setStatus(status = 'products')
}

const orders = () => {
  setStatus(status = 'orders')
}
const users = () => {
  setStatus(status = 'users')
}

useEffect(() => {
  setStatus('products')
}, [setStatus])

console.log(status)

  return (
    <div className="container">
    {/* <div className="container height-admin"> */}
      <div className="my-5">
        {/* <h2 className="mb-5">Admin</h2> */}

        
          <ul className="list-inline mb-0 admin-ul">
            <li id="prod" className="prod list-inline-item pointer text-hover h3 me-4 bg-light border border-bottom-0" onClick={products}>Products</li>
            <li id="ord" className="ord list-inline-item pointer text-hover h3 me-4 " onClick={orders}>Orders</li>
            <li id="use" className="use list-inline-item pointer text-hover h3 " onClick={users}>Users</li>
          </ul>
        

        <div className="admin-toggle border">
          { 
            switchAdmin()
          }
        </div>
      </div>
     
    </div>
  )
}

export default Admin
