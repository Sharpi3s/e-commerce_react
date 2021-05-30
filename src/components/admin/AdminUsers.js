import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, getOneUser } from '../../store/actions/userAction';
import { findOrders, getOrder } from '../../store/actions/orderActions';
import { dateBuilder, changeDelivered, changeShipping, deleteOrder } from '../../store/actions/orderActions'
import AdminEditOneUser from './AdminEditOneUser';
import AdminOrderProduct from './AdminOrderProduct';

const AdminUsers = () => {

  const dispatch = useDispatch()
  let users = useSelector(state => state.userReducer.users)
  let oneUser = useSelector(state => state.userReducer.user)

  let orders = useSelector(state => state.orderReducer.sortedOrders)
  let oneOrder = useSelector(state => state.orderReducer.order)

  const [show, setShow] = useState(false)
  const [showEditUser, setShowEditUser] = useState(false)
  const [orderDetails, setOrderDetails] = useState(false)

  const userDetails = (id) => {
    dispatch(findOrders(id))
    dispatch(getOneUser(id))
    setOrderDetails(false)
    setShow(true)
  }

  const editUser = () => {
    setShowEditUser(true)
  }

  const exitEditUser = (id) => {
    setShowEditUser(false)
    dispatch(getOneUser(id))
  }

  const showDetails = (id) => {
    setOrderDetails(true)
    dispatch(getOrder(id))
  }
  const closeDetails = () => {
    setOrderDetails(false)
  }

  const changeShippedTrue = (order) => {
    let newOrder = {
      ...order,
      value: true
    }
    dispatch(changeShipping(newOrder))
    dispatch(getOrder(order.id))
  }

  const changeShippedFalse = (order) => {
    let newOrder = {
      ...order,
      value: false
    }
    dispatch(changeShipping(newOrder))
    dispatch(getOrder(order.id))
  }

  const changeDeliveredTrue = (order) => {
      let newOrder = {
        ...order,
        value: true
      }
    dispatch(changeDelivered(newOrder))
    dispatch(getOrder(order.id))
  }

  const changeDeliveredFalse = (order) => {
    let newOrder = {
      ...order,
      value: false
    }
    dispatch(changeDelivered(newOrder))
    dispatch(getOrder(order.id))
  }

  const deleteOneOrder = (orderId, userId) => {
    dispatch(deleteOrder(orderId))
    dispatch(findOrders(userId))
    setOrderDetails(false)
  }

  useEffect(() => {
    dispatch(getUsers())
    setShowEditUser()
    setOrderDetails()
    
  }, [dispatch])


  return (
    <div className="bg-gray p-5 rounded-3">
      <div className="card p-4">
        <div>
          <p className="my-3 ms-3"><i className="fas fa-star"></i> = Admin account <span className="ms-4"><i className="far fa-star"></i> = User account</span> </p>
        </div>
      <div className="d-flex justify-content-between">
       
        <div className="card-row col-5">
          <table className="table">
            <thead>
              <tr>
                <th scope="col"><i className="fas fa-user"></i></th>
                <th scope="col">Email</th>
                <th scope="col">Id</th>
              </tr>
            </thead>
            <tbody>
              {
                users && users.map(user => (
                  <tr className="pointer pink-hover" key={user.id} user={user} onClick={() => userDetails(user.id)}>
                    {
                      user.admin ?
                        <td><i className="fas fa-star"></i></td>
                      : 
                        <td><i className="far fa-star"></i></td>
                    }
                    <td>{ user.email }</td>
                    <td>{ user.id }</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div className="details col-6 pe-4">
          <p className="text-decoration-underline">Details</p>

        {
          show && oneUser ? 
          <div>

            <div>
              {
                !orderDetails ?
                <div>
                  {
                    !showEditUser ? 
                      <div>
                        <div className="d-flex justify-content-between mb-2">
    
                          <div className="d-flex justify-content-between col-10">
                            <div className="col-6">
                              <div>
                                <p className="fw-bold mb-1 me-5">Name</p>
                                <p>{ oneUser.firstName } { oneUser.lastName }</p>
                              </div>
                              <div>
                                <p className="fw-bold mb-1 me-5">Email</p>
                                <p>{ oneUser.email }</p>
                              </div>
                              <div>
                                <p className="fw-bold mb-1 me-5">Phone</p>
                                <p>{ oneUser.number }</p>
                              </div>

                            </div>
    
                            <div className="col-5">
                              <div>
                                <p className="fw-bold mb-1 me-5">Adress</p>
                                <p className="">{ oneUser.adress } <br/>{ oneUser.postalCode }<br/>{ oneUser.city }</p>
                              </div>
                              <div>
                                <p className="fw-bold mb-1 me-5">Member since</p>
                                <p>{ dispatch(dateBuilder(oneUser.createdAt)) }</p>
                              </div>

                            </div>
                          </div>
    
                          <div className="">
                            <div className="shadow-2 border pointer rounded p-2" onClick={() => editUser()}><i className="fas fa-pencil-alt fa-lg"></i></div>
                          </div>
                        </div>
                        <div className="d-flex col-5">
                                
                        </div>
                      </div>
                    : 
                    <AdminEditOneUser key={oneUser.id} oneUser={oneUser} exitEditUser={exitEditUser} />
                  }
                </div>
                : 
                  ''
              }
            </div>

            <div className="col-12 ">
            {
              orders.length > 0 && !showEditUser? 
                <div>
                  <hr />
                  <div>
                    {
                      !orderDetails ? 
                      <div>
                        <p>Users Orders</p>
                        <div className="user-order-height">
                          <table className="table">
                            <thead>
                              <tr>
                                <th scope="col">Order Nr</th>
                                <th scope="col">Date</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Shipped</th>
                                <th scope="col">Delivered</th>
                              </tr>
                            </thead>
                            <tbody>
                            {
                              orders && orders.map(order => (
                                <tr className="pointer pink-hover" key={order.id} order={order} onClick={() => showDetails(order.id)} >
                                  <td>{ order.id.slice(0, 7) }...</td>
                                  <td>{ dispatch(dateBuilder(order.createdAt)) }</td>
                                  <td>${ order.total }</td>
                                  { order.shipping ? <td>Yes</td> : <td>No</td> }
                                  { order.delivered ? <td>Yes</td>: <td>No</td> }
                                </tr>
                              ))
                            }
                            </tbody>
                          </table>
                        </div>
                      </div>
                      : 
                      <div>
                        {
                          oneOrder ? 
                          <div>
                            <div className="mb-3 d-flex justify-content-between align-items-center">
                              <h5>Order nr: <span className="ms-3 fw-bold ">{ oneOrder.id }</span></h5>
                              <button type="button" className="btn btn-light px-3" onClick={() => closeDetails()}><i className="fas fa-times fa-lg"></i></button>
                            </div>
                            <div>
                              <div className="col-12">
                                <table className="table text-start one-user-order-details">
                                  <thead>
                                    <tr>
                                      <th scope="col">Date</th>
                                      <th scope="col">Amount</th>
                                      <th scope="col">Items</th>
                                      <th scope="col">Shipped</th>
                                      <th scope="col">Delivered</th>
                                      {/* <th scope="col"></th> */}
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr className="" >
                                      <td>{ dispatch(dateBuilder(oneOrder.createdAt)) }</td>
                                      <td>${ oneOrder.total }</td>
                                      <td>{ oneOrder.itemsQty ? oneOrder.itemsQty : oneOrder.cart.length }</td>
                                      { oneOrder.shipping ? <td>Yes</td> : <td>No</td> }
                                      { oneOrder.delivered ? <td>Yes</td>: <td>No</td> }
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <h6 className="add-new-product col-2">Products</h6>
                              <div className="col-12 my-4 one-user-product-details">
                                
                                <table className="table text-start">
                                  <thead>
                                    <tr className="">
                                      <th scope="col">Name</th>
                                      <th scope="col">Category</th>
                                      <th scope="col">Qty</th>
                                      <th scope="col">Total</th>
                                    </tr>
                                  </thead>
                                                               
                                  <tbody className="admin-user-order">
                                    {
                                      oneOrder.cart ? 
                                        oneOrder.cart.map(product => (
                                          <AdminOrderProduct key={product.id} product={product} />
                                        ))
                                      : <h3>No products</h3>
                                    }
                                  </tbody>
                                </table>
                              </div>
                              
                              <h6 className="add-new-product col-5">Handle shipping and delivery</h6>
                              <div className="mt-4 mb-5 d-flex justify-content-between align-items-end">
                                <div>
                                  <h6 className="mb-4">Shipping</h6>
                                  <div className="btn-group">
                                    <button className={`btn btn-light ${oneOrder.shipping ? 'active' : ''}`} onClick={() => changeShippedTrue(oneOrder)}>Yes</button>
                                    <button className={`btn btn-light ${!oneOrder.shipping ? 'active' : ''}`} onClick={() => changeShippedFalse(oneOrder)}>No</button>
                                  </div>
                                </div>

                                <div>
                                  <h6 className="mb-4">Delviery</h6>
                                  <div className="btn-group">
                                    <button className={`btn btn-light ${oneOrder.delivered ? 'active' : ''}`} onClick={() => changeDeliveredTrue(oneOrder)}>Yes</button>
                                    <button className={`btn btn-light ${!oneOrder.delivered ? 'active' : ''}`} onClick={() => changeDeliveredFalse(oneOrder)}>No</button>
                                  </div>    
                                </div>

                                <div className="col-2 text-end">
                                  <h6 className="mb-4">Delete order</h6>
                                  <button className="btn btn-light px-3" onClick={() => deleteOneOrder(oneOrder.id, oneUser.id)}>
                                    <i className="fas fa-trash-alt"></i>
                                  </button>
                                </div>
                              
                              </div>

                            </div>
                          </div>
                          : 
                          <div>Loading...</div>
                        }
                      </div>
                    }
                  </div>

                </div>
              : 
              ''
              }
            </div>

          </div>

          : 
          <p className="mb-m ">Select one user for more details.</p>
        }

        </div>
        
      </div>

      </div>
    </div>
  )
}

export default AdminUsers
