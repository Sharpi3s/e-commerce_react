import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders, changeDelivered, changeShipping, deleteOrder, dateBuilder } from '../../store/actions/orderActions';
// import AdminOrderDetails from './AdminOrderDetails';

const AdminOrders = () => {

  const dispatch = useDispatch()
  let orders = useSelector(state => state.orderReducer.orders)

  let [toggle, setToggle] = useState(true)

  const switchOrder = () => {
    if(!toggle) {
      setToggle(true)
    } else {
      setToggle(false)
    }
  }


  const changeShippedTrue = (order) => {
      let newOrder = {
        ...order,
        value: true
      }
    dispatch(changeShipping(newOrder))
  }

  const changeShippedFalse = (order) => {
    let newOrder = {
      ...order,
      value: false
    }
    dispatch(changeShipping(newOrder))
  }

  const changeDeliveredTrue = (order) => {
      let newOrder = {
        ...order,
        value: true
      }
    dispatch(changeDelivered(newOrder))
  }

  const changeDeliveredFalse = (order) => {
    let newOrder = {
      ...order,
      value: false
    }
    dispatch(changeDelivered(newOrder))
  }

  const deleteOneOrder = (id) => {
    dispatch(deleteOrder(id))
  }


  const userOrders = (
    <div className="col-12 pe-2">
      
      <p className="mb-4">Select one order for more details.</p>
       <div className="card-row">
        <table className="table">
            <thead>
              <tr>
                <th scope="col">Email</th>
                <th scope="col">Order Nr</th>
                <th scope="col">Date</th>
                <th scope="col">Amount</th>
                <th scope="col">Shipped</th>
                <th scope="col">Delivered</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                orders && orders.map(order => (
                  // <AdminOrderDetails key={order.id} order={order} />
                  <tr className="pointer pink-hover" key={order.id} order={order}>

                    <td>{ order.email }</td>
                    <td>{ order.id }</td>
                    <td>{ dispatch(dateBuilder(order.createdAt)) }</td>
                    <td>${ order.total }</td>
                    <td>
                      {
                        order ? 
                        <div className="btn-group" key={order.shipping}>
                          <button className={`btn btn-light ${order.shipping ? 'active' : ''}`} onClick={() => changeShippedTrue(order)}>Yes</button>
                          <button className={`btn btn-light ${!order.shipping ? 'active' : ''}`} onClick={() => changeShippedFalse(order)}>No</button>
                        </div>
                        : ''
                      }

                    </td>
                    <td>
                      {
                        order ? 
                        <div className="btn-group" key={order.shipping}>
                          <button className={`btn btn-light ${order.delivered ? 'active' : ''}`} onClick={() => changeDeliveredTrue(order)}>Yes</button>
                          <button className={`btn btn-light ${!order.delivered ? 'active' : ''}`} onClick={() => changeDeliveredFalse(order)}>No</button>
                        </div>
                        : ''
                      }

                    </td>
                    <td>
                      <button className="btn btn-light px-3" onClick={() => deleteOneOrder(order.id)}>
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </td>

                  </tr>
                ))
              }

            </tbody>
          </table>
       </div>
    </div>
  )

  const details = (
    <div>
      Order Details
    </div>
  )

  useEffect(() => {
    dispatch(getOrders())

    console.log('Hämtar från db')
  }, [dispatch])


  return (
    <div className="bg-light py-5 px-5">
      {
        orders ? 
        <div className="card p-3">
          <div className="d-flex justify-content-between col-10">
            {/* <h2>USER ORDERS</h2> */}
            <button className="btn btn-pink" onClick={switchOrder}>TRYCK</button>
          </div>
          <div >
            {
              toggle ?
              userOrders
              : details
            }
          </div>
        </div>
        : ''
      }
    </div>
  )
}

export default AdminOrders
