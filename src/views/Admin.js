import React, { useState, useEffect } from 'react'
import AdminOrders from '../components/admin/AdminOrders'
import AdminProducts from '../components/admin/AdminProducts'
import AdminUsers from '../components/admin/AdminUsers'

const Admin = () => {

  let [status, setStatus] = useState(null)

  let prod = document.querySelector('.prod')
  let ord = document.querySelector('.ord')
  let use = document.querySelector('.use')

  const switchAdmin = () => {
    if(status === 'products') {
      prod.classList.add('bg-gray', 'text-white')
      ord.classList.remove('bg-gray', 'text-white')
      use.classList.remove('bg-gray', 'text-white')
      return <AdminProducts />
      }

      if(status === 'orders') {
        prod.classList.remove('bg-gray', 'text-white')
        ord.classList.add('bg-gray', 'text-white')
        use.classList.remove('bg-gray', 'text-white')
        return <AdminOrders />
      }
      if(status === 'users') {
        prod.classList.remove('bg-gray', 'text-white')
        ord.classList.remove('bg-gray', 'text-white')
        use.classList.add('bg-gray', 'text-white')
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


  return (
    <div className="container">

      <div className="my-5">
        
          <ul className="list-inline mb-0 admin-ul col-6">         
            <li id="prod" className="prod list-inline-item pointer text-hover h3 me-4 bg-gray text-white" onClick={products}>Products</li>
            <li id="ord" className="ord list-inline-item pointer text-hover h3 me-4 " onClick={orders}>Orders</li>
            <li id="use" className="use list-inline-item pointer text-hover h3 " onClick={users}>Users</li>
          </ul>  

        <div className="admin-toggle shadow-2">
          { 
            switchAdmin()
          }
        </div>

      </div>
     
    </div>
  )
}

export default Admin
