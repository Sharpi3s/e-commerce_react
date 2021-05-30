import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders, changeDelivered, changeShipping, deleteOrder, dateBuilder } from '../../store/actions/orderActions';

const AdminOrders = () => {

  const dispatch = useDispatch()
  let orders = useSelector(state => state.orderReducer.orders)

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


  useEffect(() => {
    dispatch(getOrders())
  }, [dispatch])


  return (
    <div className="bg-gray rounded-3 p-5">
      {
        orders ? 
        <div className="card py-3 px-4">

          <div className="col-12 pe-2">
            
            <p className="mb-4">For quick selection you can change customers orders to shipped or delivered, or cancel orders if necessary.</p>
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
                        <tr className="default pink-hover" key={order.id} order={order}>

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

        </div>
        : ''
      }
    </div>
  )
}

export default AdminOrders
